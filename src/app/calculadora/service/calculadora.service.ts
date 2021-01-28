import { Injectable } from '@angular/core';

import { Calculadora } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  executarCalculo(calc: Calculadora): void {
    switch (calc.op) {
      case Calculadora.ADICAO:
        calc.resultado = calc.numero1 + calc.numero2;
        break;
      case Calculadora.DIVISAO:
        calc.resultado = calc.numero1 / calc.numero2;
        break;
      case Calculadora.MULTIPLICACAO:
        calc.resultado = calc.numero1 * calc.numero2;
        break;
      case Calculadora.SUBTRACAO:
        calc.resultado = calc.numero1 - calc.numero2;
        break; 
      default:
        calc.resultado = 0;
        break;
    }
  }
}
