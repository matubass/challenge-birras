export interface SaveMeetRequest {
  title: string;
  date: string;
  participants: Array<SaveMeetParticipantRequest>;
}

export interface SaveMeetParticipantRequest {
  email: string;
}
