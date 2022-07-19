import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {DetailProductComponent} from "./product/detail-product/detail-product.component";
import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";
import {WordDetailComponent} from "./dictionary/word-detail/word-detail.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {DeleteProductComponent} from "./product/delete-product/delete-product.component";

const routes: Routes = [
  {
    path: 'products',
    component :ProductListComponent,
    children:[
      {
        path:'create',
        component: CreateProductComponent
      },
      {
        path:'detail-product',
        component: DetailProductComponent
      },
      {
        path:'update-product/:id',
        component: UpdateProductComponent
      },
      {
        path:'delete-product/:id',
        component: DeleteProductComponent
      }
    ]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':word', component: WordDetailComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
