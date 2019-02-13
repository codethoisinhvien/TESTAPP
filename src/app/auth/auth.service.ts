import { Injectable , Inject, PLATFORM_ID} from '@angular/core';
import{HttpClient} from '@angular/common/http';

import {Router}  from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { tokenKey } from '@angular/core/src/view';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
},)

export class AuthService {
  
  isLoggedIn = false;
  token ={
    token:""
  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':this.token.token
    })
  }
  constructor(private http:HttpClient,private router: Router, @Inject(PLATFORM_ID) private platformId: Object, ) {
    
  }
 
 logout(){
     this.http.get('api/logout');
     
       localStorage.removeItem('token');
   
      this.router.navigate(['/login']);
     
  }
  async login(postdata:any){
    
    this.http.post("api/login",JSON.stringify(postdata),this.httpOptions).subscribe(res=>{
     
      
               localStorage.setItem('token',JSON.stringify(res));
               setTimeout(()=>{
                this.router.navigate(['/dashboard']);
               },500)
              
     },err=>{
  
     })
  }
  async checklogin(){
     
      if( localStorage.getItem('token')==null){
        this.router.navigate(['/login'])
      }else{
        this.token.token = localStorage.getItem('token')
      }
    
    let response:any =await this.http.get('api/checklogin',this.httpOptions)
   
    await response.subscribe(res=>{
      this.isLoggedIn = true;
    },err=>{
      this.isLoggedIn = false;
    });
    return  this.isLoggedIn;
  }
}
