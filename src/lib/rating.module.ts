import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TcBaseModule } from '@ngx-tc/base';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TcBaseModule
  ],
  exports: [
    RatingComponent
  ]
})
export class TcRatingModule { }
