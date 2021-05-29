import { TemperatureResponse } from './../entities/responses/temperature.response';
import { TemperatureRequest } from './../entities/requests/temperature.request';

import { Observable } from 'rxjs';
import { SaveMeetRequest } from '../entities/requests/save-meet.request';
import { MeetingsResponse } from '../entities/responses/meetings.response';
import { SaveMeetResponse } from '../entities/responses/save-meet.response';

export interface DataServiceInterface {
  getMeetings(): Observable<MeetingsResponse>;
  saveMeeting(request: SaveMeetRequest): Observable<SaveMeetResponse>;
  getTemperature(request: TemperatureRequest): Observable<TemperatureResponse>;
}
