import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    PaymentComponent,
    SearchRestaurantComponent,
    ViewfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
