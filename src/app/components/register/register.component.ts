import { SideNavComponent } from './../side-nav/side-nav.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  // styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private registerDialog: MatDialogRef<SideNavComponent>) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this._registerForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(){
    console.log(this._registerForm.value);
    this._authService.register(this._registerForm.value, () => {
      this.registerDialog.close();
      console.log("HIT THE CALLBACK");
    })
  }

}