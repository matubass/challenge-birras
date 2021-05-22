import { environment } from './../environments/environment';
import { MeetingListComponent } from './shared/components/meeting-list/meeting-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { DataServiceMock } from './core/mock/data.service.mock';
import { DataServiceInterface } from './core/interfaces/data.service.interface';
import { DataService } from './core/services/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const production = environment.production;
const mockService = environment.mockService;

@NgModule({
  declarations: [
    AppComponent,
    MeetingListComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [
    {
      provide: DataService,
      useFactory: createDataService,
      deps: [Injector]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    const defaultlenguage = environment.defaultLanguage.split('-')[0];
    translate.setDefaultLang(defaultlenguage);
    translate.use(defaultlenguage);
  }
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export function createDataService(injector: Injector): DataServiceInterface {
  if (!production && mockService) {
    return new DataServiceMock(injector.get(HttpClient));
  } else {
    return new DataService(injector.get(HttpClient));
  }
}
