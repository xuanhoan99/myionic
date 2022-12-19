import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';

const routes: Routes = [  
  {
    path: '',
    component: CartPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
      },
      {
        path: 'notify',
        loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
      },
      {
        path: '',
        redirectTo: '/cart/cart',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cart/cart',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
