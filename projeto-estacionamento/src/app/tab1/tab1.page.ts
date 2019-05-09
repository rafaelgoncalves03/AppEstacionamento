import { Component } from '@angular/core';
import { EstacionamentoService } from '../service/estacionamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  ticket: any;

  constructor(public estacionamentoService: EstacionamentoService,
    private  router: Router) { 
      this.ticket = this.estacionamentoService.Iniciar(); 
    }

  Gerar(){
    this.ticket = this.estacionamentoService.Iniciar();
  }
}
