import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// Step1
  loginForm!: FormGroup;
// Step2:
  constructor(public fb: FormBuilder, public router: Router){

  }
// Step3:
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.loginForm = this.fb.group({
  userName:['Angular',[Validators.required, Validators.minLength(3) ]],
  password:['',Validators.required ]
})
  }

  logIn(){
    const uName = 'Angular';
    const pwd = 'Angular@1';
  const userEnteredName = this.loginForm.get('userName')?.value;
  const userEnteredPwd = this.loginForm.get('password')?.value;

  console.log(userEnteredName,userEnteredPwd);

  if(userEnteredName === uName && userEnteredPwd===pwd){

    localStorage.setItem('alreadyLoggedIn', 'yes');
    this.router.navigate(['home']);
  }
  else{
    alert('Please Enter Correct Credentials');
  }

//  this.router.navigate(['home']);
  }

  checkStatus(){
   console.log( this.loginForm);
  }
}
