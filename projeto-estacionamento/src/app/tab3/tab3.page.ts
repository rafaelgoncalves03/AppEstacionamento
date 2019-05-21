import { Component, OnInit } from '@angular/core';
import { EstacionamentoService } from '../service/estacionamento.service';
import { Router } from '@angular/router';
import { Pagamento } from '../model/pagamento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {
  pagamentos: Observable<Pagamento[]>;

  constructor(public estacionamentoService: EstacionamentoService) {}

  ngOnInit() {
    this.pagamentos = this.estacionamentoService.getIdeas();
  }
}
