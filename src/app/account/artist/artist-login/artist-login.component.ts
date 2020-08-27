import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-artist-login',
  templateUrl: './artist-login.component.html',
  styleUrls: ['./artist-login.component.css']
})
export class ArtistLoginComponent implements OnInit {
  roles:String;
  isLoggedInArtist = false;
  isLoginFailed = false;
  errorMessage = '';
  

  artistLoginForm=this.fb.group({
    username: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3)])]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private fb:FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedInArtist = true;
    }
    if(this.isLoggedInArtist){
      this.router.navigate(['']);
    }
  }

  artistLogin(artistLoginForm:FormGroup) {
    const artist = artistLoginForm.value;
    const formdata = new FormData();
    formdata.append('artist', JSON.stringify(artist));
    this.authService.artistLogin(formdata).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedInArtist = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert("Login Successfully");
        this.reloadPage();
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
