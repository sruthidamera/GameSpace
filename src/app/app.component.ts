import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchtitle:any;
  title = 'webapp';
  num=0;


  constructor(private ss:ServiceService){

    this.ss.countChange.subscribe(
      (value)=>{
        this.num=value;
      }
    )

  }
  ngOnInit(){
    
  }

  

  searchIcon(){
    
    this.ss.searchPipe(this.searchtitle);
  }




  onSubmit(variable:NgForm){

  }
}
