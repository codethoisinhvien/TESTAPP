import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-navdashboard',
  templateUrl: './navdashboard.component.html',
  styleUrls: ['./navdashboard.component.css']
})
export class NavdashboardComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }
  async onClick(){
    console.log("thoat")
   
    await this.auth.logout();
 }
}
