import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

class Pagamento {
  public ticket: any;
  public entrada: any;
  public saida: any;
  public total: any; 
}

@Injectable({
  providedIn: 'root'
})

export class EstacionamentoService {
  pagamentos: Observable<Pagamento[]>
  pagamentoCollection: AngularFirestoreCollection<Pagamento>;

  constructor( private afs: AngularFirestore ) { 
    this.pagamentoCollection = this.afs.collection<Pagamento>('ideas');
    this.pagamentos = this.pagamentoCollection.snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  meusPagamentos: Pagamento[] = new Array(); 
  novoPagamento: Pagamento;

  Iniciar(){
    this.novoPagamento = new Pagamento();
    this.novoPagamento.ticket = Math.floor(Math.random() * (9999-1));
    
    return this.novoPagamento.ticket;
  }

  Calcular(entrada, saida){
    let e = new Date(entrada);
    let s = new Date(saida);
    let t = e.getHours() - s.getHours();
    t = +(t * -1) * 10;

    return  t;
  }

  Pagar(entrada: any, saida: any, total: any){
    this.novoPagamento.entrada = entrada;
    this.novoPagamento.saida = saida;
    this.novoPagamento.total = total;

    this.meusPagamentos.push(    
      this.novoPagamento    
    );  

    this.meusPagamentos.forEach(item => console.log(item))
  }

  addIdea(pagamento: Pagamento): Promise<DocumentReference>{
    return this.pagamentoCollection.add(pagamento);
  }

  getIdeas(): Observable<Pagamento[]>{
    return this.pagamentos;
  }
}
