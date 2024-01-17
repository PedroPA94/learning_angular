import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { favoritesFactory } from '../favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [{ provide: ProductsService, useFactory: favoritesFactory(true) }]
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
