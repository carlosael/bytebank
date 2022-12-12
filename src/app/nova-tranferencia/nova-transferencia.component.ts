import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() onTransfer = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitar nova transferencia');
    const emitValue = { valor: this.valor, destino: this.destino };
    this.onTransfer.emit(emitValue);

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
