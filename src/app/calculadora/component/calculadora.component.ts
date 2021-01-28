import { Component, OnInit } from '@angular/core';

import { Calculadora } from '../model';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculadora: Calculadora;

  constructor(
      private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
      this.calculadora = new Calculadora();
      this.limparVisor();
  }

  limparVisor(): void {
    this.calculadora.n1 = '0';
    this.calculadora.n2 = null;
    this.calculadora.op = null;
    this.calculadora.resultado = null;
  }

  incluirNumero(numero: string): void {
    if(this.calculadora.op === null) {
      this.calculadora.n1 = this.formatarNumeroVisor(this.calculadora.n1, numero);
    } else {
      this.calculadora.n2 = this.formatarNumeroVisor(this.calculadora.n2, numero);
    }
  }

  formatarNumeroVisor(valorAtual: string, numeroSelecionado: string): string {
    if(valorAtual === '0' || valorAtual === null) {
      valorAtual = '';
    }

    if(numeroSelecionado === '.' && valorAtual === '') {
      return '0.';
    }

    if(numeroSelecionado === '.' && valorAtual.indexOf('.') > -1 ) {
      return valorAtual;
    }

    return valorAtual.concat(numeroSelecionado);
  }

  selecionarOperacao(op: string): void {
    if(this.calculadora.op === null) {
      this.calculadora.op = op;
      return;
    }

    if(this.calculadora.n2 !== null) {
      this.calculadoraService.executarCalculo(this.calculadora);
      this.calculadora.op = op;
      this.calculadora.n1 = this.calculadora.resultado.toString();
      this.calculadora.n2 = null;
      this.calculadora.resultado = null;
    }
  }

  calcular(): void {
    if(this.calculadora.n2 === null) {
      return;
    }

    this.calculadoraService.executarCalculo(this.calculadora);
  }

  get visor(): string {
    if(this.calculadora.resultado !== null) {
      return this.calculadora.resultado.toString();
    }
    
    if(this.calculadora.n2 !== null) {
      return this.calculadora.n2;
    }

    return this.calculadora.n1;
  }

}
