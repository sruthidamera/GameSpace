import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private us:ServiceService,private router:Router) { }


  pass="password"

  ngOnInit(): void {
  }
  passtype(){
    console.log("success")
   let eye=document.getElementById("eye")
   let s_eye=document.getElementById("s_eye")
   if(this.pass=="password"){
     this.pass="text";
     if(eye!=null && s_eye!=null){
       eye.style.display="none"
       s_eye.style.display="inline"
     }  
   }
   else{
     this.pass="password";
     if(eye!=null && s_eye!=null){
       eye.style.display="inline"
       s_eye.style.display="none"
     }
   }
  }


  onSubmit(ref:NgForm){
    let userCredentialsObj=ref.value;
    
      this.us.userCredentials(userCredentialsObj).subscribe(
        res=>{
           if(res["message"]=="Invalid email"){
             alert("Invalid emailid")
           }
           if(res["message"]=="Invalid password"){
             alert("Invalid password")
           }
           if(res["message"]=="password matched"){
            
             localStorage.setItem("token",res["jwt"])
            let userObj=JSON.stringify(res["userObj"])
            localStorage.setItem("user",userObj)
            ref.reset();
             this.router.navigateByUrl("/userdashboard")
          }
          
        },
        err=>{
          alert("something happened in creating user")
        }
      )
    }

    
  

}
