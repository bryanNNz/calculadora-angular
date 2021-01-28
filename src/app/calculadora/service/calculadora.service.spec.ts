import { TestBed } from '@angular/core/testing';

import { Calculadora } from '../model';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('deve criar o servico', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar 4 quando executar a expressao: 2 + 2', () => {
    let calculadora: Calculadora = new Calculadora(0, '2', '2', '+');
    service.executarCalculo(calculadora);
    expect(calculadora.resultado).toEqual(4);
  });

  it('deve retornar 5 quando executar a expressao: 9 - 4', () => {
    let calculadora: Calculadora = new Calculadora(0, '9', '4', '-');
    service.executarCalculo(calculadora);
    expect(calculadora.resultado).toEqual(5);
  });

  it('deve retornar 2.5 quando executar a expressao: 5 / 2', () => {
    let calculadora: Calculadora = new Calculadora(0, '5', '2', '/');
    service.executarCalculo(calculadora);
    expect(calculadora.resultado).toEqual(2.5);
  });

  it('deve retornar 0.4 quando executar a expressao: 0.2 * 0.5', () => {
    let calculadora: Calculadora = new Calculadora(0, '0.2', '0.5', '*');
    service.executarCalculo(calculadora);
    expect(calculadora.resultado).toEqual(0.1);
  });
  
});
