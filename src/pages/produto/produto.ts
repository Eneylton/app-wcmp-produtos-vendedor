import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

@IonicPage({})
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  wooCommerce: any;
  products: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public WP: WoocommerceProvider) {

    this.wooCommerce = WP.init(true);
  
  }

  ionViewDidLoad() {
    this.wooCommerce.getAsync("products").then((data) => {
     
      this.products = JSON.parse(data.body);

      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {
          temp[i].subCategories = [];
          temp[i].id
          temp[i].vendor
          temp[i].images[0].src
      
        }

        console.log("Produto_id: " , temp[i].id);
        console.log("Vendedor_id: ", temp[i].vendor);
        console.log("Imagens do Produto: ", temp[i].images[0].src);
      }

    })
  }

}
