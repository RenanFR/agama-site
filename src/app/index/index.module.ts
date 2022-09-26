import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule],
  exports: [IndexComponent],
})
export class IndexModule {}