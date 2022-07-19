import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form : FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })
  id: number =0;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      // @ts-ignore
      this.form.setValue(product)
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findProductById(id);
  }

  updateProduct(id: number) {
    const product = this.form.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }

}
