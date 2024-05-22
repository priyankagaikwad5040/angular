import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-bindind-ass',
  templateUrl: './two-way-data-bindind-ass.component.html',
  styleUrls: ['./two-way-data-bindind-ass.component.css']
})
export class TwoWAyDataBindindAssComponent implements OnInit {
mob : string="";
msg :string="";

  constructor() { }

  ngOnInit(): void {
  }
onInput(val :any)
{
this.mob=val;

}
reset(event :Event){
  
    var inputName1 = event.target as HTMLInputElement;
    if(this.mob==inputName1.value){
      inputName1.value="";
      this.mob="";
      if(inputName1.value=="" && this.mob=="")
    this.msg=" Input Fields cleared"
   
  }

}

}
