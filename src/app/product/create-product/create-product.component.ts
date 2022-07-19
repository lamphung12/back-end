import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price : new FormControl(''),
    description : new FormControl('')
  })
  // obj:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }
  addNewProducts() {
    console.log(this.form.value);
    const product = this.form.value;
    this.productService.saveProduct(product);
    this.form.reset();
  }


}
