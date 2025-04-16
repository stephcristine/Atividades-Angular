import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'palindromo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  palavra: string = '';
  resultado: string = '';
  palindromo: boolean = false;

  analisarPalavra() {
    const texto = this.palavra.trim().toLowerCase();
    const tamanho = texto.length;
    this.palindromo = texto === texto.split('').reverse().join('');
    this.resultado = `A palavra "${this.palavra}" possui ${tamanho} caracteres e ${this.palindromo ? 'é' : 'não é'} um palíndromo.`;
  }
}