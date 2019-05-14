import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.page.html',
  styleUrls: ['./shoes.page.scss'],
})
export class ShoesPage implements OnInit {
  shoesProducts;
  showSkelton = true
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getShoes.subscribe(shoesproducts => {
      this.shoesProducts = shoesproducts
      this.showSkelton = false
    })
  }

}
