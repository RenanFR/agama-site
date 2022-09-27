import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './service/contact-service';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ContactComponent],
  providers: [ContactService],
})
export class ContactModule {}
