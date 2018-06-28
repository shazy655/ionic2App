import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemDetailPage} from '../item-detail/item-detail'
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    items = [];

    constructor(public navCtrl: NavController) {
        for (let k = 0; k < 10; k++)
            this.items.push('Value ' + k);
    }

    itemSelected(item: string) {
       // console.log("Selected Item", item);
        this.navCtrl.push(ItemDetailPage,{
            item: {text:item,id:'5'}
        })

    }
}
