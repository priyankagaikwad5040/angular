import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name :string ="";
  surname : string="";
  update:string="";
  username :string="";
  constructor() { }

  ngOnInit(): void { 

 }
   onInputChange1(event : Event) {
   let inputName = event.target as HTMLInputElement;
   this.name = inputName.value;
    
   }
  onInputChange(value : any) {    
    this.surname = value;     
  }
  onInputChange2(value : any) {    
    this.surname = value;     
  }
  clickMe(event : Event){
    var inputName = event.target as HTMLInputElement;
    if(this.name==inputName.value){
      inputName.value="Input Updated";
      
    }

this.name="input Updated";
  }
  twowayData(value : any) {    
    this.username = value;     
  }

  reset(event :Event){
    
    var inputName1 = event.target as HTMLInputElement;
    if(this.username==inputName1.value){
      inputName1.value="";
      this.username="";
   
    }
    }
  
    
    
  

}

