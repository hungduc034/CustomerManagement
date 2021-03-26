import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {DataService} from './data.service';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    CardViewComponent,
    ViewOrderComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
