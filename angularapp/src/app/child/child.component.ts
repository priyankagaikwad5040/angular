import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() getdata! : string;
@Output () sendData :EventEmitter<string>= new EventEmitter<string>();
  constructor() { 
   
    
  }

  ngOnInit(): void {
    console.log(`getting from parent`,this.getdata);
  }
senddata(){
  const data ="Hello Parent";
  this.sendData.emit(data);
}
}
