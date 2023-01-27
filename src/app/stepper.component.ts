import {Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { StepperOrientation } from '@angular/cdk/stepper';

@Component({
  selector: 'stepper-vertical-example',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperVerticalExample implements OnInit {

  stepperLayout: StepperOrientation = 'vertical';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
    secondCtrl: [''],
    thirdCtrl: [''],
  });
  secondFormGroup = this._formBuilder.group({
    fourthCtrl: [''],
    fifthCtrl: [''],
    sixthCtrl: [''],
  });
  thirdFormGroup = this._formBuilder.group({
    seventhCtrl: [''],
    eightCtrl: [''],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.mediaObserver.asObservable().subscribe(changes => {
      changes.forEach(change => {
        if (change.mqAlias === 'lg' || change.mqAlias === 'lt-xl') {
          this.stepperLayout = 'vertical';
          console.log(change.mqAlias)
        } else {
          this.stepperLayout = 'horizontal';
        }
      });
    });
  }

}
