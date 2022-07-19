import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductBeService} from "../../service/product-be.service";

@Component({
  selector: 'app-create-product-be',
  templateUrl: './create-product-be.component.html',
  styleUrls: ['./create-product-be.component.css']
})
export class CreateProductBeComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price : new FormControl(''),
  })
  obj: any;
  constructor(private httpCline: HttpClient, private router: Router,
              private productBeService: ProductBeService) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.form.value)
    this.obj ={
      id : this.form.value.id,
      name : this.form.value.name,
      price : this.form.value.price,
      category: {
        id: 1
      }
    }

    this.productBeService.save(this.obj).subscribe((data) => {
      alert("Them thanh cong");
      this.obj=data;
      this.router.navigate(['product-be'])
    },error=>{
      alert('Loi')
    })
  }

}
