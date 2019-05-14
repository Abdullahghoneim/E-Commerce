import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.page.html',
  styleUrls: ['./apparel.page.scss']
})
export class ApparelPage implements OnInit {
  apparelProducts;
  showSkelton = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getApparel.subscribe(
      apparel => {
        this.apparelProducts = apparel;
        this.showSkelton = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
