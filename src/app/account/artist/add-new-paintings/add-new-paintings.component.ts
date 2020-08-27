import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ArtistService } from '../../services/artist.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-add-new-paintings',
  templateUrl: './add-new-paintings.component.html',
  styleUrls: ['./add-new-paintings.component.css']
})
export class AddNewPaintingsComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showArtistBoard = false;
  username: string;
  artistid: string;

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  public artistPaintFile1:any = File;
  public artistPaintFile2:any = File;
  public artistPaintFile3:any = File;

  newPaintingForm=this.fb.group({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*')])]),
    firstImage:new FormControl('', Validators.required),
    secondImage:new FormControl('', Validators.required),
    thirdImage:new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),
  });

  constructor(private fb:FormBuilder, private _router:Router, private artistService:ArtistService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.artistid = user.id;

      this.showArtistBoard = this.roles.includes('ROLE_ARTIST');

      this.username = user.fullname;
      if (!this.showArtistBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this._router.navigate(['home']);
      }
    }else{
      alert("Please login by registered Artist account.");
      this._router.navigate(['artist/login']);
    }
  }

  caldob(event){
    const date1 = new Date();
    const date2 = new Date(event.target.value);
      if (date1 < date2) {
        alert('Date is not proper');
        event.target.value = '';
      }	
  }

  onSelectFile1(event) {
    const fileone = event.target.files[0];
    this.artistPaintFile1 = fileone;
  }

  onSelectFile2(event) {
    const filetwo = event.target.files[0];
    this.artistPaintFile2 = filetwo;
  }

  onSelectFile3(event) {
    const filethree = event.target.files[0];
    this.artistPaintFile3 = filethree;
  }

  saveForm(newPaintingForm:FormGroup){
    const painting = newPaintingForm.value;
    const formdata = new FormData();
    formdata.append('painting', JSON.stringify(painting));
    formdata.append('artistid', this.artistid);
    formdata.append('file1', this.artistPaintFile1);
    formdata.append('file2', this.artistPaintFile2);
    formdata.append('file3', this.artistPaintFile3);
    this.artistService.addNewPaintings(formdata).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
        alert("Added Successfully.");
        this.newPaintingForm.reset();
      },
      err => {
        this.isFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }

}
