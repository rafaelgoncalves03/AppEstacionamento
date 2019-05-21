import { Component } from '@angular/core';
import { EstacionamentoService } from 'src/app/service/estacionamento.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pagamento } from 'src/app/model/pagamento';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  pagamento: Pagamento = {
    entrada: '',
    saida: '',
    total: '',
    reais: '',
    ticket: this.estacionamentoService.NumeroTicket()
  }

  constructor(public estacionamentoService: EstacionamentoService, private  router: Router, public alertController: AlertController) { 
      this.pagamento.total = 0;
  }

  Calcular() {
    
    this.pagamento.total = this.estacionamentoService.Calcular(this.pagamento.entrada, this.pagamento.saida);

    if(this.pagamento.total > 0){
      this.pagamento.reais = "R$" + this.pagamento.total + ",00";
    }
    else{
      this.AlertaAtencao();
    }
  }

  Pagar(){
       
    console.log(this.pagamento.ticket)

    if(!this.pagamento.ticket && this.pagamento.total > 0){
      //Realizar pagamento.
      this.estacionamentoService.Pagar(this.pagamento.entrada, this.pagamento.saida, this.pagamento.total, this.pagamento.ticket);
      this.pagamento.entrada = "";
      this.pagamento.saida = "";
      this.pagamento.total = "R$0,00";
      this.AlertaSucesso();
    }
    else{
      this.AlertaErro();
    }
  }

  async AlertaSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Ticket pago com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  //Essa alerta pode ocorrer quando existe ticket pago ou valor total é menor que 0.
  async AlertaErro() {
    const alert = await this.alertController.create({
      header: 'Erro!',
      message: 'Ocorreu um erro ao realizar pagamento!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertaAtencao() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Entrada deve ser menor que saída!',
      buttons: ['OK']
    });

    await alert.present();
  }

  addIdea(){
    this.estacionamentoService.addIdea(this.pagamento).then(() => {
      this.router.navigateByUrl('/');
      alert('Sucesso! Add OK');
    }, err => alert('Add deu ruim!')
    )
  }
}
