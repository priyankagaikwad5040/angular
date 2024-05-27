import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  ischecked :boolean=true;
 courses :string[]=[];
   
checked(){
  if (this.ischecked){
  this.courses=['angular','JAVA','React'];
  }
  if(this.ischecked==false)
    {
    this.courses =[];
    this.courses.length=0;
  }
}
branch : string[]= ['2021', '2022', '2023', '2024'];
year=new Date().getFullYear();
currentYear :string =this.branch[this.year];
constructor() { }

  ngOnInit(): void {
    console.log(this.year);
    
  }

}
