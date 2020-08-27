import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-register',
  templateUrl: './artist-register.component.html',
  styleUrls: ['./artist-register.component.css']
})
export class ArtistRegisterComponent implements OnInit {

  doNotMatch:boolean=false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  portrait:string = "false"; 
  wallpainter:string = "false"; 

  public artistFile1:any = File;
  public artistFile2:any = File;

  artistRegisterForm=this.fb.group({
    username: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3)])]),
    fullname: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    email: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])]),
    contact: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*'), Validators.minLength(10), Validators.maxLength(14)])]),
    experience: new FormControl('', Validators.required),
    qualification: new FormControl('',[Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*')])]),
    website: new FormControl('', Validators.compose([Validators.pattern('https?://.+')])),
    address: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    samplepaint1:new FormControl('', Validators.required),
    samplepaint2:new FormControl('', Validators.required),
    password:new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword:new FormControl('', Validators.required)
  });

  constructor(private fb:FormBuilder, private authService:AuthService, private _router:Router ) {}

  ngOnInit(): void {
  }

  onSelectFile1(event) {
    const fileone = event.target.files[0];
    this.artistFile1 = fileone;
  }

  onSelectFile2(event) {
    const filetwo = event.target.files[0];
    this.artistFile2 = filetwo;
  }

  onChangePortrait(event) {  
    const checked = event.target.checked; 
    if (checked) {   
      this.portrait = event.target.value;
    } else {  
      this.portrait = "false";
    }  
  }
  
  onChangeWall(event) {  
    const checked = event.target.checked; 
    if (checked) {   
      this.wallpainter = event.target.value;
    } else {  
      this.wallpainter = "false";
    }  
  } 

  saveForm(artistRegisterForm:FormGroup){
    this.doNotMatch = false;
    
    const password = this.artistRegisterForm.get(['password'])!.value;
    if (password !== this.artistRegisterForm.get(['confirmPassword'])!.value) {
      this.doNotMatch = true;
    } else {
      const user = artistRegisterForm.value;
      const formdata = new FormData();
      formdata.append('user', JSON.stringify(user));
      formdata.append('portrait', this.portrait);
      formdata.append('wallpainter', this.wallpainter);
      formdata.append('file1', this.artistFile1);
      formdata.append('file2', this.artistFile2);
      this.authService.artistRegister(formdata).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this._router.navigate(['artist/login']);
          alert("Registered Successfully.");
        },
        err => {
          this.isSignUpFailed = true;
          this.errorMessage = err.error.message;
        }
      );
    }
  }

  // reloadPage() {
  //   window.location.reload();
  // }

}
