import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
