import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consulta-cep',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent {
  cep = '';
  endereco: any = null;
  erro: string | null = null;

  constructor(private http: HttpClient) {}

  consultarCep() {
    this.endereco = null;
    this.erro = null;

    const cepLimpo = this.cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      this.erro = 'CEP inválido!';
      return;
    }

    this.http.get(`https://viacep.com.br/ws/${cepLimpo}/json/`).subscribe({
      next: (data: any) => {
        if (data.erro) {
          this.erro = 'Endereço não encontrado!';
        } else {
          this.endereco = data;
        }
      },
      error: () => {
        this.erro = 'Erro na consulta!';
      }
    });
  }
}
