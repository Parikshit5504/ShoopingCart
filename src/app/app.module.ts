import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { CartItemComponent } from './shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shoppingcart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingcartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
