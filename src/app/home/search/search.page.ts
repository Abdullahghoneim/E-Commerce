import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  products;
  noProducts = false;
  showSpinner = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {}
  searchProduct(term) {
    this.showSpinner = true;
    this.productsService
      .searchProducts(term.detail.value)
      .subscribe(searchResult => {
        this.products = searchResult;
        this.showSpinner = false;
        if (this.products.length === 0) {
          this.noProducts = true;
          this.showSpinner = false;
        } else {
          this.noProducts = false;
        }
      });
  }
  onClear() {
    this.showSpinner = false;
    this.noProducts = false;
  }
}
