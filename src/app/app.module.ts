import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
    
import {FeedbackComponent} from './feedback/feedback.component'
import { ResulttestComponent } from './resulttest/resulttest.component';
import { TestComponent } from './test/test.component';
import { VerifyComponent } from './verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ResulttestComponent,
    TestComponent,
    VerifyComponent
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    DashboardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
