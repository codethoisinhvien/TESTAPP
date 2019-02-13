import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { HistoryComponent } from '../history/history.component';
import { SubjectComponent } from '../subject/subject.component';
import { AuthGuard } from '../auth/auth.guard'
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "history", component: HistoryComponent },
      { path: "subject", component: SubjectComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
