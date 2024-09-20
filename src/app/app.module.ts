import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { PipePipe } from './pipe.pipe';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TestComponent } from './test/test.component';
import { AuthorisationService } from './authorisation.service';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchPipe } from './search.pipe';
import { Add2cartComponent } from './add2cart/add2cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ErrorComponent,
    PipePipe,
    UserdashboardComponent,
    TestComponent,
    PopularComponent,
    TrendingComponent,
    SearchPipe,
    Add2cartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:AuthorisationService,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
