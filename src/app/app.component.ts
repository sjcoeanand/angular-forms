import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive forms';
  myGroup: FormGroup;
  form: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.myGroup = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }
  handleSubmit() {
    console.log(this.myGroup);
  }

  get firstname() {
    return this.myGroup.get('firstname'); //notice this
  }
  get password() {
    return this.myGroup.get('password');  //and this too
  }
  
}
