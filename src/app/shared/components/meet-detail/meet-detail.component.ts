import { Subscription } from 'rxjs';
import { TemperatureRequest } from './../../../core/entities/requests/temperature.request';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/app/core/services/error.service';
import { SaveMeetRequest } from './../../../core/entities/requests/save-meet.request';
import { DataService } from './../../../core/services/data.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meet-detail',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.scss']
})
export class MeetDetailComponent implements OnInit, OnDestroy {

  meetForm: FormGroup;
  participants: FormArray;
  minDate: string;
  latitude: number;
  longitude: number;
  temperature: number;
  beerBoxes: number;
  subscription: Subscription;
  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private dataService: DataService,
              private errorService: ErrorService,
              private translateService: TranslateService) {
    this.meetForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      date: ['', [Validators.required]],
      participants: this.formBuilder.array([]),
      email: ['']
    });
    this.minDate = new Date().toISOString().slice(0, 16);
  }

  get meetingForm() { return this.meetForm.controls; }

  ngOnInit() {
    this.getLocation();
    this.subscription = this.meetingForm.date.valueChanges.subscribe(
      value => {
        if (value) {
          this.getTemperature();
        }
      }
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        resp => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
          this.getTemperature();
        }
      );
    } else {
      this.errorService.showErrorAlertMessage(this.translateService.instant('MEET_DETAIL.GEOLOCALIZATION_ERROR'));
    }
  }

  private createParticipant(email: string): FormGroup {
    const form = this.formBuilder.group({
      email: [email, [Validators.required]]
    });
    return form;
  }

  addParticipant(): void {
    const email = this.meetingForm.email.value;
    if (email) {
      this.participants = this.meetForm.get('participants') as FormArray;
      this.participants.push(this.createParticipant(email));
      this.meetingForm.email.setValue('');
      this.getTemperature();
    }

  }

  removeParticipant(index: number): void {
    this.participants.removeAt(index);
    this.getTemperature();
  }

  getTemperature() {
    this.participants = this.meetForm.get('participants') as FormArray;
    if (this.participants.length > 0 && this.meetingForm.date.value && this.latitude && this.longitude) {
      const request: TemperatureRequest = {
        date: this.meetingForm.date.value,
        amountOfPeople: this.participants.length,
        latitude: this.latitude,
        longitude: this.longitude
      };
      this.dataService.getTemperature(request).subscribe(
        resp => {
          this.temperature = resp.temperature;
          this.beerBoxes = resp.beersBoxes;
        },
        err => {
          this.temperature = null;
          this.beerBoxes = null;
        }
      )
    } else {
      this.temperature = null;
      this.beerBoxes = null;
    }
  }

  onSave(): void {
    const request: SaveMeetRequest = {
      date: this.meetingForm.date.value,
      title: this.meetingForm.title.value,
      participants: this.meetingForm.participants.value
    };
    this.subscription = this.dataService.saveMeeting(request).subscribe(
      rest => {
        this.errorService.showSuccessAlertMessage(this.translateService.instant('MEET_DETAIL.SUCCESS_MESSAGE'));
        this.route.navigate(['']);
      },
      err => {
        this.errorService.showErrorAlertMessage(err);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
