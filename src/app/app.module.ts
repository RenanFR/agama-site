import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexModule } from './index/index.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
