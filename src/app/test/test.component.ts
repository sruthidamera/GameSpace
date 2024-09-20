import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  //private hc:HttpClient
  
 ngOnInit(): void {
  //   this.hc.get("/user/test").subscribe(
  //     res=>{
  //       alert(res["message"])
  //     },
  //     err=>{
  //       console.log(err)
  //     }
  //   )
   }

}
