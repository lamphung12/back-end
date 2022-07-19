import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WordListComponent } from './dictionary/word-list/word-list.component';
import { WordDetailComponent } from './dictionary/word-detail/word-detail.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    DetailProductComponent,
    WordListComponent,
    WordDetailComponent,
    DictionaryPageComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
