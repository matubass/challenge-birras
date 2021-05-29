import { MeetingItemResponse } from './../../../core/entities/responses/meetings.response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  @Input() meeting: MeetingItemResponse;
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
