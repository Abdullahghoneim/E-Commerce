import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {
  id: string;
  product;
  showProduct = true;
  showDetails = false;
  showReview = false;
  showSkelton = true;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(
      product => {
        this.product = product;
        this.showSkelton = false;
      },
      err => {
        console.log(err);
      }
    );
  }
  segmentChanged(ev: any) {
    if (ev.detail.value === 'product') {
      this.showDetails = false;
      this.showReview = false;
      this.showProduct = true;
    }
    if (ev.detail.value === 'details') {
      this.showProduct = false;
      this.showDetails = true;
    }
    if (ev.detail.value === 'reviews') {
      this.showProduct = false;
      this.showDetails = false;
      this.showReview = true;
    }
  }
}
