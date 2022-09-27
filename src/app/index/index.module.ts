import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [IndexRoutingModule],
  exports: [IndexComponent],
})
export class IndexModule {}
