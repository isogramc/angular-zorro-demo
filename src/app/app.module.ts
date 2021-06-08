import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NZ_I18N, NzI18nModule} from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import { IntroCardComponent } from './intro-card/intro-card.component';
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTagModule} from "ng-zorro-antd/tag";
import { PaginationComponent } from './pagination/pagination.component';
import { SearchBarMainComponent } from './search-bar-main/search-bar-main.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { SendOfferFormComponent } from './send-offer-form/send-offer-form.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroCardComponent,
    PaginationComponent,
    SearchBarMainComponent,
    SendOfferFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzAvatarModule,
    NzPaginationModule,
    NzTagModule,
    NzIconModule,
    NzAutocompleteModule,
    /*NgxsModule.forRoot([ZooState], {
      developmentMode: !environment.production
    }),*/
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
