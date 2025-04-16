import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  expressao = '';
  resultado: number | string = '';

  calcular() {
    try {
      const match = this.expressao.match(/^(\d+)\s*([\+\-\*\/])\s*(\d+)$/);

      if (match) {
        const numero1 = parseFloat(match[1]);
        const operador = match[2];
        const numero2 = parseFloat(match[3]);

        switch (operador) {
          case '+':
            this.resultado = numero1 + numero2;
            break;
          case '-':
            this.resultado = numero1 - numero2;
            break;
          case '*':
            this.resultado = numero1 * numero2;
            break;
          case '/':
            this.resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: divisão por zero';
            break;
        }
      } else {
        this.resultado = 'Expressão inválida. Use: número operador número';
      }
    } catch (e) {
      this.resultado = 'Erro ao calcular';
    }
  }
}
