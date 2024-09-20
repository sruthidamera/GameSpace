import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logomod',
  templateUrl: './logomod.component.html',
  styleUrls: ['./logomod.component.css']
})
export class LogomodComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigateByUrl("register")

  }
   read(){
  let dots=document.getElementById("dots");
  let more=document.getElementById("more");
  let btn=document.getElementById("readclick");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
    
  }
  read1(){
    let dots=document.getElementById("dots1");
  let more=document.getElementById("more1");
  let btn=document.getElementById("readclick1");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
  }

  read2(){
    let dots=document.getElementById("dots2");
  let more=document.getElementById("more2");
  let btn=document.getElementById("readclick2");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
  }

  read3(){
    let dots=document.getElementById("dots3");
  let more=document.getElementById("more3");
  let btn=document.getElementById("readclick3");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
  }

  read4(){
    let dots=document.getElementById("dots4");
  let more=document.getElementById("more4");
  let btn=document.getElementById("readclick4");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
  }

  read5(){
    let dots=document.getElementById("dots5");
  let more=document.getElementById("more5");
  let btn=document.getElementById("readclick5");

  if(dots!=null && btn!=null && more!=null){
    if(dots.style.display=="none"){
      dots.style.display="inline";
      btn.innerHTML="Read More";
      more.style.display="none";
    }
    else{
      dots.style.display="none";
      btn.innerHTML="Read Less";
      more.style.display="inline";
    }
  }
  }
  
}
