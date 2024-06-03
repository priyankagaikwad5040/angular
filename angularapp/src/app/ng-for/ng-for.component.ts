import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  country1 = [ 
    "Sachin Tendulkar", 
    "Ricky Ponting", 
    "Virat Kohli", 
    "Kumar Sangakkara", 
    "Jacques Kallis", 
    "Hashim Amla ", 
    "Mahela Jayawardene ", 
    "Brian Lara", 
    "Rahul Dravid", 
    "AB de Villiers"
  ] 
  selected = "----"
  
  update(e : any){ 
    this.selected = e.target.value 
  } 
  
  
  
}



export class DropdownComponent { 
}
