import { MeetDetailComponent } from './shared/components/meet-detail/meet-detail.component';
import { MeetingListComponent } from './shared/components/meeting-list/meeting-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: MeetingListComponent
  },
  {
    path: 'new-meet',
    component: MeetDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
