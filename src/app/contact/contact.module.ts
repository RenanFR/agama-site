import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRoutingModule],
  exports: [ContactComponent],
})
export class ContactModule {}
