import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
// property
isClicked = false;

buttonStyle = {
  'color': this.isClicked ? 'red': 'green'
};

colorValue = 'pink';
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.isClicked = !this.isClicked;
    this.buttonStyle = { 'color': this.isClicked ? 'red': 'green' }
   }

}
