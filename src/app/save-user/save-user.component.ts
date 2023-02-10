import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpCallsService } from '../services/http-calls.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  saveForm !: FormGroup

  fb = inject(FormBuilder);
  httpService = inject(HttpCallsService);
  snackBar = inject(MatSnackBar);
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.saveForm = this.fb.group({
    id:['' ],
    userId:[''],
    title:[''],
    body:['']
  })

}
save(){
  console.log(this.saveForm.value);

  this.httpService.saveDataToDataBase(this.saveForm.value).subscribe(data=>{

    console.log(data);
    this.saveForm.reset();
  this.openSnackBar('Saved Succesfully','close');
  })

}

loadData(){
  this.saveForm.get('title')?.setValue('Hello');
  this.saveForm.get('userId')?.setValue('12');
  this.saveForm.get('id')?.setValue('1');
  this.saveForm.get('body')?.setValue('Welcome to Training');
}

openSnackBar(message: string, action:string) {
  this.snackBar.open(message, action);
}
}
