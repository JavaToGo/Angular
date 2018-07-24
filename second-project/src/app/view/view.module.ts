import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewCompComponent } from './view-comp/view-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ViewCompComponent],
  exports: [ViewCompComponent]
})
export class ViewModule { }
