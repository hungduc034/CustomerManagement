import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  { path: 'card-view', component: CardViewComponent,
    children:[
      { path: 'view-order/:id', component: ViewOrderComponent },
      { path: 'view-detail/:id', component: ViewDetailComponent },
    ]
  },
  { path: 'list-view', component: ListViewComponent,
  children:[
    { path: 'view-order/:id', component: ViewOrderComponent },
    { path: 'view-detail/:id', component: ViewDetailComponent },
  ] },

  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {path:'**', redirectTo:'view', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
