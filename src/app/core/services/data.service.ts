import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataServiceInterface } from './../interfaces/data.service.interface';
import { Injectable } from '@angular/core';
import { MeetingsResponse } from '../entities/responses/meetings.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface {

  private apiUrl = environment.apiUrl;
  private getMeetingsPath = '/api/v1/getMeetings';

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<MeetingsResponse> {
    return this.http.get<MeetingsResponse>(this.apiUrl + this.getMeetingsPath);
  }
}
