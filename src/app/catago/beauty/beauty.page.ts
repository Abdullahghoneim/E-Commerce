import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.page.html',
  styleUrls: ['./beauty.page.scss'],
})
export class BeautyPage implements OnInit {
  beautyProducts;
  showSkelton = true
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getBeauty.subscribe(beautyProducts => {
      this.beautyProducts = beautyProducts;
      this.showSkelton = false
    }, err => {
      console.log(err)
    })
  }
}
