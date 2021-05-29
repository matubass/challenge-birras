import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveMeetRequest } from '../entities/requests/save-meet.request';
import { TemperatureRequest } from '../entities/requests/temperature.request';
import { MeetingsResponse } from '../entities/responses/meetings.response';
import { SaveMeetResponse } from '../entities/responses/save-meet.response';
import { TemperatureResponse } from '../entities/responses/temperature.response';
import { DataServiceInterface } from './../interfaces/data.service.interface';

export class DataServiceMock implements DataServiceInterface {
  private getMeetingsPath = 'assets/mocks/meetings.json';
  private saveMeetingsPath = 'assets/mocks/saveMeet.json';
  private getTemperaturePath = 'assets/mocks/temperature.json';

  constructor(private http: HttpClient) {}

  getMeetings(): Observable<MeetingsResponse> {
    return this.http.get(this.getMeetingsPath) as Observable<MeetingsResponse>;
  }

  saveMeeting(request: SaveMeetRequest): Observable<SaveMeetResponse> {
    return this.http.get(this.saveMeetingsPath) as Observable<SaveMeetResponse>;
  }

  getTemperature(request: TemperatureRequest): Observable<TemperatureResponse> {
    return this.http.get<TemperatureResponse>(this.getTemperaturePath);
  }
}
