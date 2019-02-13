import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavdashboardComponent } from './navdashboard/navdashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { HistoryComponent } from '../history/history.component';
import { SubjectComponent } from '../subject/subject.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { HomeModule} from '../home/home.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavdashboardComponent,
    ProfileComponent,
    HistoryComponent,
    SubjectComponent,
    SidenavComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HomeModule
  ]
})
export class DashboardModule { }
