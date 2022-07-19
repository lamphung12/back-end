import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService:ProductService) { }///Đây là tiêm lấy dữ liệu từ service giống @Autowire

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.products = this.productService.getAll();
  }

}
