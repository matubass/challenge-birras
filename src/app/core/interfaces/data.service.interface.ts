
import { Observable } from 'rxjs';
import { MeetingsResponse } from '../entities/responses/meetings.response';

export interface DataServiceInterface {
  getMeetings(): Observable<MeetingsResponse>;
}
