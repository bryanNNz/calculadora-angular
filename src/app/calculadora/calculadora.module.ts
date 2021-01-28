import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './component';
import { CalculadoraService } from './service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalculadoraComponent 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
