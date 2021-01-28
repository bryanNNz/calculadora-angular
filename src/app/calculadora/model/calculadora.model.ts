export class Calculadora {
    public static readonly SUBTRACAO = '-';
    public static readonly ADICAO = '+';
    public static readonly MULTIPLICACAO = '*';
    public static readonly DIVISAO = '/';
    
    constructor(
        public resultado?: number,
        public n1?: string,
        public n2?: string,
        public op?: string
    ) {};

    get numero1(): number {
        return parseFloat(this.n1);
    }

    get numero2(): number {
        return parseFloat(this.n2);
    }

}