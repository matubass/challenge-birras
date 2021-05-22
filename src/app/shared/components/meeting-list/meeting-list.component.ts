import { Component, OnInit } from '@angular/core';
import { MeetingItemResponse } from 'src/app/core/entities/responses/meeting-item.response';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  meetings: Array<MeetingItemResponse>;
  constructor() { }

  ngOnInit() {
    this.meetings = [{
      date: "10-12-2021 10:40",
      title: "Ejemplo",
      participants: [{email: 'matiasretzlaff@gmail.com'}]
    }]
  }

}
