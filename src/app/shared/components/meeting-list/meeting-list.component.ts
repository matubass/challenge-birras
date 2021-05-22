import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { MeetingsResponse } from 'src/app/core/entities/responses/meetings.response';
import { ErrorService } from 'src/app/core/services/error.service';
import { ToastInterface } from 'src/app/core/interfaces/toast.interface';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  meetings: MeetingsResponse;
  constructor(private dataService: DataService,
              public errorService: ErrorService) { }

  ngOnInit() {
    this.getMeetings();
  }

  getMeetings() {
    this.dataService.getMeetings().subscribe(
      resp => {
        this.meetings = resp;
        this.errorService.showErrorAlertMessage('nada');
      },
      err => {
        this.errorService.showErrorAlertMessage(err);
      }
    );
  }

}
