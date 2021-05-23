import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { MeetingsResponse } from 'src/app/core/entities/responses/meetings.response';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})

export class MeetingListComponent implements OnInit {

  loading = true;
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
        this.loading = false;
      },
      err => {
        this.errorService.showErrorAlertMessage(err);
        this.loading = false;
      }
    );
  }

}
