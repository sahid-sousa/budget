import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CadastroItemPage } from './cadastro-item/cadastro-item';
import { ItemProvider } from '../../providers/item/item';
import { Compra } from '../../providers/compra/compra';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html',
})
export class ItensPage {

  compra: Compra;
  listaItems: any[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public itemProvider: ItemProvider) {

    this.compra = navParams.get('orcamento');
    this.getAllItem();

  }

  getAllItem() {
    this.itemProvider.getAllItemCompra(this.compra.id)
      .then((result: any[]) => {
        this.listaItems = result;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItensPage');
  }

  itemSelecionado(item) {
    console.log(item);
  }

  adicionarItens() {
    console.log("Adicionar Lista de Compras");
    let modal = this.modalCtrl.create(CadastroItemPage, { compra: this.compra.id });
    modal.onDidDismiss(() => {
      console.log('Modal closed');
      this.getAllItem();
    });
    modal.present();
  }

}
