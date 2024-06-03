import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
data :string ="I am  from parent component";
response : string ="";
  constructor() { }

  ngOnInit(): void {
  }
  handleData(){
    console.log('custom event called');
    
  }

}
