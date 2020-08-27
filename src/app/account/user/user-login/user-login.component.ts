import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  roles:String;
  isLoggedInUser = false;
  isLoginFailed = false;
  errorMessage = '';

  userLoginForm=this.fb.group({
    username: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3)])]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private fb:FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private _router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedInUser = true;
    }
    if (this.isLoggedInUser) {
      this._router.navigate(['']);
    }
  }

  userLogin(){
    const username = this.userLoginForm.get(['username'])!.value;
    const password = this.userLoginForm.get(['password'])!.value;
    this.authService.login({username, password}).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedInUser = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        alert("Login Successfully");
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
