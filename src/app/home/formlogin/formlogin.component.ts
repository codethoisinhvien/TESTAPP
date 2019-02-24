import { Component, OnInit } from '@angular/core';
import{Data} from './Data';
import { HttpClientModule }    from '@angular/common/http';

import { httpFactory } from '@angular/platform-server/src/http';
import { HttpClient,HttpHeaders}    from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css'],
 
})

export class FormloginComponent implements OnInit {
  postdata:Data={
    usename: "" ,
    password: ""
    };
   
  constructor(private http:HttpClient,private auth :AuthService) { 
  
  }
  
  ngOnInit() {
  }
  onSubmit() { 
  
 this.auth.login(this.postdata);
   
  }
}
