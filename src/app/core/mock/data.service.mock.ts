import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingsResponse } from '../entities/responses/meetings.response';
import { DataServiceInterface } from './../interfaces/data.service.interface';

export class DataServiceMock implements DataServiceInterface {
  private getMeetingsPath = 'assets/mocks/meetings.json';

  constructor(private http: HttpClient) {}

  getMeetings(): Observable<MeetingsResponse> {
    return this.http.get(this.getMeetingsPath) as Observable<MeetingsResponse>;
  }
}
