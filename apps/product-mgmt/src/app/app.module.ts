import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppMatModule } from './app-mat.module';
import { AppTranslateModule } from './app-translate.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppMatModule, AppTranslateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
