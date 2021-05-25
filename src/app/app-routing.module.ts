import { MeetDetailComponent } from './shared/components/meet-detail/meet-detail.component';
import { MeetingListComponent } from './shared/components/meeting-list/meeting-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MeetingListComponent
  },
  {
    path: 'new-meet',
    component: MeetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
