import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { HistoryComponent } from '../history/history.component';
import { SubjectComponent } from '../subject/subject.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
   children:[
    {path:"profile",component:ProfileComponent},
    {path:"history",component:HistoryComponent},
    {path:"subject",component:SubjectComponent}
   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
