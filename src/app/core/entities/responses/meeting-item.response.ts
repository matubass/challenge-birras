export interface MeetingItemResponse {
  date: string;
  title: string;
  participants: Array<MeetingItemParticipantResponse>;
}

export interface MeetingItemParticipantResponse {
  email: string;
}
