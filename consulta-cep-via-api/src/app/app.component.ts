import { Component } from '@angular/core';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsultaCepComponent],
  template: '<app-consulta-cep></app-consulta-cep>',
})
export class AppComponent {}
