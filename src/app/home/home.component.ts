import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchtitle:any;
  data=[];
  arr:any=[]
  inc=0;
  ar1:any=[];
  carousel=[]
  @Output() size=new EventEmitter();

  constructor(private ss:ServiceService,private router:Router) { 

    this.ss.search.subscribe(
      (val)=>{
        this.searchtitle=val;

      }
    )
  }

  ngOnInit(): void {
    this.ss.getData().subscribe(
      res=>{
        this.data=res["message"];
      
      },
      err=>{
        alert("something wrong in getting data")
        console.log(err)
      }
  
    )
    this.ss.getCarousel().subscribe(
      res=>{
        this.carousel=res["message"];
        console.log(this.carousel);

      },
      err=>{
        alert("carousel effect")
      }
    )
    
  }

  addCart(d:any){
    this.ss.test().subscribe(
      res=>{
        if(res["message"]=="Unauthorised access..try to re login"){
          alert("Unauthorised access..try to re login")
        }
        if(res["message"]=="session expired"){
          alert("session expired")
        }
        if(res["message"]=="finally reached private route" || res["message"]=="Undefined" || res["message"]=="undefined"){
          this.arr.push(d)
           localStorage.setItem('localcart',JSON.stringify(this.arr))
           localStorage.setItem('len',JSON.stringify(this.arr.length))
           this.ss.update(this.arr.length);
         
         
        }
      
      },
      err=>{
        console.log(err)
      }
    )
   
  }

 



  
 
}
