import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ItemProvider, Item } from '../../../providers/item/item';
import { Component } from '@angular/core';

@Component({
    selector: 'page-cadastro-item',
    templateUrl: 'cadastro-item.html',
})
export class CadastroItemPage {
    item: Item;
    compra_id: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public itemProvider: ItemProvider) {

        this.compra_id = navParams.get('compra');
        this.item = new Item();
    }

    cadastrarItem() {
        if (this.item !== null) {
            this.item.compra_id = this.compra_id;
            if (this.item.id) {
                return this.itemProvider.update(this.item);
            } else {
                return this.itemProvider.insert(this.item);
            }
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
