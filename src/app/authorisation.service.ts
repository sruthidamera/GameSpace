import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let token=localStorage.getItem("token")
    if(token!=undefined){
      let copyOfToken=req.clone(
        { headers:req.headers.set("Authorisation","Bearer "+token)}
      )
    
      return next.handle(copyOfToken)
    }
    else{
      return next.handle(req)
    }
  }
}
