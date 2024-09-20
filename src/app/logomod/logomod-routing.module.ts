import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogomodComponent } from './logomod.component';

const routes: Routes = [{ path: '', component: LogomodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogomodRoutingModule { }
