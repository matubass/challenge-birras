import { SaveMeetRequest } from './../entities/requests/save-meet.request';
import { SaveMeetResponse } from './../entities/responses/save-meet.response';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataServiceInterface } from './../interfaces/data.service.interface';
import { Injectable } from '@angular/core';
import { MeetingsResponse } from '../entities/responses/meetings.response';
import { Observable } from 'rxjs';
import { TemperatureRequest } from '../entities/requests/temperature.request';
import { TemperatureResponse } from '../entities/responses/temperature.response';

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface {

  private apiUrl = environment.apiUrl;
  private getMeetingsPath = '/api/v1/getMeetings';
  private saveMeetingUrl = '/api/v1/saveMeeting';
  private getTemperaturePath = '/api/v1/getTemperature';

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<MeetingsResponse> {
    return this.http.get<MeetingsResponse>(this.apiUrl + this.getMeetingsPath);
  }

  saveMeeting(request: SaveMeetRequest): Observable<SaveMeetResponse> {
    return this.http.post<SaveMeetResponse>(this.apiUrl + this.saveMeetingUrl, request);
  }

  getTemperature(request: TemperatureRequest): Observable<TemperatureResponse> {
    return this.http.post<TemperatureResponse>(this.apiUrl + this.getTemperaturePath, request);
  }
}
