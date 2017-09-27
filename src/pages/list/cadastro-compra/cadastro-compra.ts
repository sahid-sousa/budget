import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CompraProvider, Compra } from '../../../providers/compra/compra';
import { Component } from '@angular/core';


@Component({
  selector: 'page-cadastro-compra',
  templateUrl: 'cadastro-compra.html',
})
export class CadastroCompraPage {

  compra: Compra;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public compraProvider: CompraProvider) {

    this.compra = new Compra();
  }

  cadastrar() {
    if (this.compra !== null) {
      if (this.compra.id) {
        return this.compraProvider.update(this.compra);
      } else {
        return this.compraProvider.insert(this.compra);
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
