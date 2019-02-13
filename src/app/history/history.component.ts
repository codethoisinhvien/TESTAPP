import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  data:any=[{stt:1,test:"cong phan mmem 1",subject:"SE",time:"10 phút"},{stt:1,test:"cong phan mmem 1",subject:"SE",total:10,time:"10 phút"},{stt:1,test:"cong phan mmem 1",subject:"SE",time:"10 phút"}]
   
  ngOnInit() {
    
  }

}
