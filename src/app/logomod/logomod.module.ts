import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogomodRoutingModule } from './logomod-routing.module';
import { LogomodComponent } from './logomod.component';


@NgModule({
  declarations: [LogomodComponent],
  imports: [
    CommonModule,
    LogomodRoutingModule
  ]
})
export class LogomodModule { }
