import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// Step1
  loginForm!: FormGroup;
// Step2:
  constructor(public fb: FormBuilder){

  }
// Step3:
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.loginForm = this.fb.group({
  userName:['Angular'],
  passWord:[]
})
  }

}
