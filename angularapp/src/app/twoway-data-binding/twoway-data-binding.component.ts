import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-data-binding',
  templateUrl: './twoway-data-binding.component.html',
  styleUrls: ['./twoway-data-binding.component.css']
})
export class TwowayDataBindingComponent implements OnInit {
  department: string = 'IT';
  constructor() { }

  ngOnInit(): void {
  }

}
