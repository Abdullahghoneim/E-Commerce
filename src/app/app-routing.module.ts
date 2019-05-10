import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: './components/signup/signup.module#SignupPageModule'
  },
  {
    path: 'login',
    loadChildren: './components/signin/signin.module#SigninPageModule'
  },
  {
    path: 'home/lastProducts/:id',
    loadChildren:
      './home/last-products/product-details/product-details.module#ProductDetailsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
