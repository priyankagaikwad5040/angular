import { Component, OnInit } from '@angular/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  
  

})

export class PersonalInfoComponent implements OnInit {
  checked = false;
  indeterminate = false;


  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(registerForm: NgForm){
    console.log('Register Form', registerForm);
    
      //api/Register(registerForm.value);
    
      }


}
