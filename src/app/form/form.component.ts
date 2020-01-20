import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['',  Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.max(30), Validators.min(10)])],
      identifier: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    })
   }

  ngOnInit() {
  }

  formSubmit(){
    console.log("studentForm", this.studentForm.value)
  }

}
