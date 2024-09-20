import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Add2cartComponent } from './add2cart/add2cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TrendingComponent } from './trending/trending.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"userdashboard",component:UserdashboardComponent},
  {path:"test",component:TestComponent},
  { path: 'logomod', loadChildren: () => import('./logomod/logomod.module').then(m => m.LogomodModule) },
  {path:'popular',component:PopularComponent},
  {path:'home',component:HomeComponent},
  {path:'trending',component:TrendingComponent},
  {path:'add2cart',component:Add2cartComponent},
  
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
