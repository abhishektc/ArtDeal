import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  doNotMatch:boolean=false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  userRegisterForm=this.fb.group({
    username: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3)])]),
    fullname: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    email: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])]),
    contact: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*'), Validators.minLength(4), Validators.maxLength(14)])]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword:new FormControl('', Validators.required)
   });

  constructor(private fb:FormBuilder,private authService:AuthService, private _router:Router ) { }

  ngOnInit(): void {
  }

  userForm(){
    this.doNotMatch = false;
    
    const password = this.userRegisterForm.get(['password'])!.value;
    if (password !== this.userRegisterForm.get(['confirmPassword'])!.value) {
      this.doNotMatch = true;
    } else {
      const username = this.userRegisterForm.get(['username'])!.value;
      const fullname = this.userRegisterForm.get(['fullname'])!.value;
      const email = this.userRegisterForm.get(['email'])!.value;
      const contact = this.userRegisterForm.get(['contact'])!.value;
      const address = this.userRegisterForm.get(['address'])!.value;
      const city = this.userRegisterForm.get(['city'])!.value;
      const password = this.userRegisterForm.get(['password'])!.value;

      this.authService.register({ username, fullname, email, contact, address, city, password, roles: 'user' }).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this._router.navigate(['user/login']);
          alert("Registered Successfully.");
        },
        err => {
          this.isSignUpFailed = true;
          this.errorMessage = err.error.message;
        }
      );

    }
  }

  reloadPage() {
    window.location.reload();
  }
  

}
