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
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(
      product => {
        this.product = product;
      },
      err => {
        console.log(err);
      }
    );
  }
}
