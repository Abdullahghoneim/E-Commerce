import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-last-products',
  templateUrl: './last-products.page.html',
  styleUrls: ['./last-products.page.scss']
})
export class LastProductsPage implements OnInit {
  products;
  showSkelton = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts.subscribe(
      products => {
        this.products = products;
        this.showSkelton = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
