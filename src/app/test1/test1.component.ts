import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})



export class Test1Component implements OnInit {

  constructor() { }

  options:string[] = [];

  ngOnInit(): void {
    
  }
  addOpt1(option1: string){
    this.options.unshift(option1);
    return true;
  }
  addOpt2(option2: string){
    this.options.unshift(option2);
    return true;
  }
  deleteOpt(option: string){
    for(let i=0; i<this.options.length;i++){
      if(this.options[i] == option){
        this.options.splice(i,1);
        break;
      }
    }
  }
  Sub(){
    alert("Дані внесені!");
    this.options = [];
  }
}
