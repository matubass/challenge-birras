import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meet-detail',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.scss']
})
export class MeetDetailComponent implements OnInit {

  meetForm: FormGroup;
  participants: FormArray;
  minDate: string;
  constructor(private formBuilder: FormBuilder,
              private route: Router) {
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
  }

  private createParticipant(email: string): FormGroup {
    const form = this.formBuilder.group({
      email: [email, [Validators.required]]
    });
    return form;
  }

  addParticipant(): void {
    const email = this.meetingForm.email.value;
    if(email) {
      this.participants = this.meetForm.get('participants') as FormArray;
      this.participants.push(this.createParticipant(email));
      this.meetingForm.email.setValue('');
    }

  }

  removeParticipant(index: number): void {
    this.participants.removeAt(index);
  }

  onSave(): void {
    this.route.navigate(['']);
  }
}
