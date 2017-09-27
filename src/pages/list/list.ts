import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CompraProvider } from '../../providers/compra/compra';
import { CadastroCompraPage } from './cadastro-compra/cadastro-compra';
import { ItensPage } from '../../pages/itens/itens';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  listaCompras: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public compraProvider: CompraProvider) {
    this.getAllCompras();
  }


  getAllCompras() {
    this.compraProvider.getAll()
      .then((result: any[]) => {
        this.listaCompras = result;
      });
  }

  itemOrcamentoSelecionado(item) {
    this.navCtrl.push(ItensPage, { orcamento: item });
    console.log(item);
  }

  adicionar() {
    console.log("Adicionar Lista de Compras");
    let modal = this.modalCtrl.create(CadastroCompraPage);
    modal.onDidDismiss(() => {
      console.log('Modal closed');
      this.getAllCompras();
    });
    modal.present();
  }
}
