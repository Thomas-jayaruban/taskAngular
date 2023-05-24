import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  hideValue:boolean = false;
  addTask(){
   
    this.hideValue = true;
  }
  ngOnInit(){

  }
  taskDetailsSubmit(data:any):void{
    console.log(data);

  }
  
}
