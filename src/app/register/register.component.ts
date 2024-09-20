import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private us:ServiceService,private router:Router) { }
  
  

  ngOnInit(): void {
  }
  goTOLogin(){
    this.router.navigateByUrl("dashboard")
  }

 
  onSubmit(totalForm:NgForm){
    let userObj=totalForm.value;
    if(userObj.password!=userObj.confirmpassword){
      alert("Entered passwords should be matched")
    }
    else{
    delete userObj.confirmpassword;
      this.us.createuser(userObj).subscribe(
        res=>{
          if(res["message"]=="user already exists"){
            alert("user exists")
          }else if(res["message"]=="user created") {
                totalForm.reset();
                alert("User created successfully")
                this.router.navigateByUrl("/dashboard")
          }
        },
        err=>{
          alert("something in creating user")
          console.log(err);
      }
      )
     
    }
  }
  
}
