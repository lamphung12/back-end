import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductBeService} from "../../service/product-be.service";

@Component({
  selector: 'app-list-product-backend',
  templateUrl: './list-product-backend.component.html',
  styleUrls: ['./list-product-backend.component.css']
})
export class ListProductBackendComponent implements OnInit {
  list:any;

  constructor(private httpCline: HttpClient,
              private productBeService: ProductBeService) {
  }

  ngOnInit(): void {
    this.productBeService.findAll().subscribe((data) => {
      console.log(data)
      this.list=data;
    },error=>{

    })

  }
}
