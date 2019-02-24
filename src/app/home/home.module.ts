import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import{HomeComponent} from './home.component'
import {FooterComponent} from './footer/footer.component'
import {NavComponent} from './nav/nav.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { from } from 'rxjs';
import { FormloginComponent } from './formlogin/formlogin.component';
import { RegisterComponent } from './register/register.component';
import {AuthService } from '../auth/auth.service'
@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavComponent,
    FormloginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
 
  exports:[FooterComponent]
})
export class HomeModule { }
