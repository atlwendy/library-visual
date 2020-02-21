import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TsButtonModule, TsCardModule, TsSpacingModule} from '@terminus/ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TsButtonModule,
    TsSpacingModule,
    TsCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
