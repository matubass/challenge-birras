import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeetUpListComponent } from './meeting-list.component';

describe('MeetUpListComponent', () => {
  let component: MeetUpListComponent;
  let fixture: ComponentFixture<MeetUpListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetUpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetUpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
