import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
