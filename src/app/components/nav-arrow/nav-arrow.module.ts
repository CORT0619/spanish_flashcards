import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavArrowComponent } from './nav-arrow.component';

@NgModule({
  declarations: [NavArrowComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavArrowComponent
  ]
})
export class NavArrowModule { }
