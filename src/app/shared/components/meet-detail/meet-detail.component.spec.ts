import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeetDetailComponent } from './meet-detail.component';

describe('MeetDetailComponent', () => {
  let component: MeetDetailComponent;
  let fixture: ComponentFixture<MeetDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
