import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { StepperVerticalExample } from './stepper.component'
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    StepperVerticalExample,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule


  ],
  exports: [
    MatStepperModule,
    StepperVerticalExample,
    MatButtonModule,



  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }
