import { Component, OnInit } from '@angular/core';

import { ExecutionTypes } from 'src/app/models/measure.model';

import {FormControl, FormGroupDirective, NgForm, Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SharedService } from 'src/app/home/services/shared.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //condition true
    const isSubmitted = form && form.submitted;
    //false
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {
    executionTypes: ExecutionTypes[] = [
    {value: 'Simple', viewValue: 'Simple'},
    {value: 'Complex', viewValue: 'Complex'},
  ];
  mainLimitFormControl!: FormControl;
  mainRetentionFormControl!: FormControl;
  executionTypeFormControl!: FormControl;
  matcher:any;
  myform: any;

  constructor(private sharedService:SharedService){}
  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.mainLimitFormControl = new FormControl(1, [
      Validators.required,   
      Validators.pattern("^[0-9]*$")
    ]);
    this.mainRetentionFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]);
    this.executionTypeFormControl = new FormControl('', [
      Validators.required,  
    ]);  
    this.matcher = new MyErrorStateMatcher();

  }

  createForm(){
    this.myform = new FormGroup({
      mainLimitFormControl: this.mainLimitFormControl,
      mainRetentionFormControl: this.mainRetentionFormControl,
      executionTypeFormControl: this.executionTypeFormControl
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.sharedService.setTableData(true);
    }
  }

  formReset(){
    this.myform.reset();
    this.sharedService.setTableData(false);
  }
}
