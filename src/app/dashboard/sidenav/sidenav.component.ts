import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
   user:any
  constructor(private http:HttpClient,) { }

  ngOnInit() {
  this.http.get('api/profile',{
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': JSON.parse(localStorage.getItem('token')).token
    })}).subscribe(res=>{
    this.user=res; 
  },
  err=>{

  })
  }

}
