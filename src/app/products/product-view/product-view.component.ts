import { Component, Host, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  @Input() id = -1;
  name = '';

  constructor(@Host() private productViewService: ProductViewService) {}

  ngOnInit(): void {
    const product = this.productViewService.getProduct(this.id);
    if (product) {
      this.name = product.name;
    }
  }
}
