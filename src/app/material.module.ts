import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormField } from '@angular/material/form-field'
import { StepperVerticalExample } from './stepper.component'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    StepperVerticalExample,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatStepperModule,
    StepperVerticalExample,
    MatButtonModule,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [StepperVerticalExample]
})

export class MaterialModule { }
