import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userObj:any;
  conv:any;
  
  constructor(private router:Router) { }
 
  ngOnInit(): void {
    
   //this.userObj=JSON.parse(localStorage.getItem("user"))
    
     
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/home")
  }

}
