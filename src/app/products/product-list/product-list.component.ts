import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products$: Observable<Product[]> | undefined;
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  getProducts(): void {
    this.products$ = this.productsService.getProducts();
  }

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
