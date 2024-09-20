import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  fromHome=0;
  countChange:Subject<number>=new Subject<number>()
  search:Subject<string>=new Subject<string>()


  constructor(private hc:HttpClient) {

   }

  

   
   getIt():number{
     return this.fromHome;
   }

   update(arrLen:number){

    this.countChange.next(arrLen);


   }
   searchPipe(data:any){
     this.search.next(data);
   }




   test():Observable<any>{
     return this.hc.get("/user/test");
   }

   getData():Observable<any>{
    return  this.hc.get("/user/getcards");
   }

   getCarousel():Observable<any>{
    return  this.hc.get("/user/getcarousel");
   }
 
   createuser(userObj:NgForm):Observable<any>{
    return this.hc.post("/user/createuser",userObj);

   }
   
   userCredentials(userCredentialsObj:NgForm):Observable<any>{
     return this.hc.post("/user/dashboard",userCredentialsObj);
   }
}
