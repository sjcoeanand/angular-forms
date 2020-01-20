import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      students: 
      this.fb.array(new Array(1).fill(
        this.newStudent()
    )) 
    })
   }

   removeStudent(index: number): void {
    this.students.removeAt(index);
  }

  removeAllStudents(): void {
    this.students.clear();
  }


   addStudent(): void {
    this.students.push(this.newStudent());
  }

  newStudent(){
    return this.fb.group({
      name: ['', Validators.required],
      ge: ['', Validators.compose([Validators.required, Validators.max(30)])],
      identifier: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    })
  }


   get students() {
    return this.studentForm.get('students') as FormArray;
  }

  ngOnInit() {

  }

  

}
