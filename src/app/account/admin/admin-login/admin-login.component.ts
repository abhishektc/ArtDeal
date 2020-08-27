import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  roles:String;
  isLoggedInAdmin = false;
  isLoginFailed = false;
  errorMessage = '';
  

  adminLoginForm=this.fb.group({
    username: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3)])]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private fb:FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedInAdmin = true;
    }
    if (this.isLoggedInAdmin){
      this.router.navigate(['']);
    }
  }


  adminLogin(adminLoginForm:FormGroup) {
    const admin = adminLoginForm.value;
    const formdata = new FormData();
    formdata.append('admin', JSON.stringify(admin));
    this.authService.adminLogin(formdata).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedInAdmin = true;
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

  reloadPage(){
    window.location.reload();
  }

}
