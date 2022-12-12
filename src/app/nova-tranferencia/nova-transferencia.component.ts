
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() onTransfer = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const emitValue: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(emitValue)
      .subscribe(resultado => {
        this.limparCampos()
        this.router.navigateByUrl('extrato')
      },
      error => console.log(error));
  }

  limparCampos() {
    this.valor = undefined;
    this.destino = undefined;
  }
}
