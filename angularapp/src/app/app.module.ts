import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo } from './demo/demo.component';
import { Demo2 } from './demo2/demo2.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwowayDataBindingComponent } from './twoway-data-binding/twoway-data-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWAyDataBindindAssComponent } from './two-way-data-bindind-ass/two-way-data-bindind-ass.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SwitchComponent } from './switch/switch.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directivess/custom.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgForComponent } from './ng-for/ng-for.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SimpleFormComponent } from './simple-form/simple-form.component';
// import { CountryStatesComponent } from './country-states/country-states.component';
// import { CountryStateSelectorComponent } from './country-state-selector/country-state-selector.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MatDividerModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormBuilder,  ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    Demo,
    Demo2,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    TwowayDataBindingComponent,
    TwoWAyDataBindindAssComponent,
    AddToCartComponent,
    SwitchComponent,
    DirectivesComponent,
    NgStyleComponent,
    NgclassComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent,
    NgForComponent,
    SimpleFormComponent,
    // CountryStatesComponent,
    // CountryStateSelectorComponent,
    RegistrationFormComponent,
    PersonalInfoComponent,
    

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
     MatDividerModule,
      MatButtonModule,
       MatProgressBarModule ,
       MatCheckboxModule,
       MatSelectModule,
       ReactiveFormsModule ,
MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
