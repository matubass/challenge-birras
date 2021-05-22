import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MeetUpComponent } from './shared/components/meet-up/meet-up.component';
import { MeetUpListComponent } from './shared/components/meet-up-list/meet-up-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetUpComponent,
    MeetUpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
