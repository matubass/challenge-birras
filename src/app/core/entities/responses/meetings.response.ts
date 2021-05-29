export interface MeetingsResponse {
  meetings: Array<MeetingItemResponse>;
}

export interface MeetingItemResponse {
  date: string;
  title: string;
  participants: Array<MeetingItemParticipantResponse>;
  temperature: number;
}

export interface MeetingItemParticipantResponse {
  email: string;
}
