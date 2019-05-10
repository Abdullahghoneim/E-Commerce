import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'lastProducts'
          },
          {
            path: 'lastProducts',
            loadChildren:
              './last-products/last-products.module#LastProductsPageModule'
          },
          {
            path: 'search',
            loadChildren: './search/search.module#SearchPageModule'
          },
          {
            path: 'cart',
            loadChildren: './cart/cart.module#CartPageModule'
          },
          {
            path: 'categories',
            loadChildren: './categories/categories.module#CategoriesPageModule'
          }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
