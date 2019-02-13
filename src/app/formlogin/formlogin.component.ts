import { Component, OnInit } from '@angular/core';
import{Data} from './Data';
import { HttpClientModule }    from '@angular/common/http';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/platform-server/src/http';
import { HttpClient }    from '@angular/common/http';
@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})

export class FormloginComponent implements OnInit {
  postdata:Data={
    usename: "" ,
    password: ""
    };
   
  constructor(private http:HttpClient) { 
  
  }
  
  ngOnInit() {
  }
  onSubmit() { 

   this.http.post("/login",JSON.stringify(this.postdata)).subscribe(res=>{
    console.log(res);
   })
  }
}
