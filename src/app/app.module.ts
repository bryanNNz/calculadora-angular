import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule,
    AppRoutingModule
  ],
  providers: [
      
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
