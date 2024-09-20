import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add2cart',
  templateUrl: './add2cart.component.html',
  styleUrls: ['./add2cart.component.css']
})
export class Add2cartComponent implements OnInit {
  add2carddata=[];
  yes=[]
  yeah:any=[]


  constructor(private ss:ServiceService,private router:Router) { }

  ngOnInit(): void {
    //  if(JSON.parse(localStorage.getItem('localcart'))!=null){
    //   this.add2carddata=JSON.parse(localStorage.getItem('localcart'));   
    //  console.log(this.add2carddata)
    // }
  }

  remove(dog:any){
         for(let i=0;i<this.add2carddata.length;i++){
           if(dog==this.add2carddata[i]){
             this.add2carddata.splice(i,1)
             localStorage.setItem('localcart',JSON.stringify(this.add2carddata))
             localStorage.setItem('len',JSON.stringify(this.add2carddata.length))
             this.ss.update(this.add2carddata.length)
           }
         }
  }
  removeAll(){
    
    localStorage.removeItem("localcart")
    this.ss.update(0)
    localStorage.removeItem('len')
    this.router.navigateByUrl("/home")
  }



 


}
