import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isSuccessful:boolean;

  feedbackForm=this.fb.group({
    fullname: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    subject: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(6)])]),
    email: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])]),
    message: new FormControl('', Validators.required),
   });

  constructor(private fb:FormBuilder, private _router:Router, private userService:UserService ) { }

  ngOnInit(): void {
  }

  feedbackForms(){
    const fullname = this.feedbackForm.get(['fullname'])!.value;
    const email = this.feedbackForm.get(['email'])!.value;
    const subject = this.feedbackForm.get(['subject'])!.value;
    const message = this.feedbackForm.get(['message'])!.value;

    this.userService.feedback({ fullname, email, subject, message }).subscribe(
      data => {
        console.log(data),
        this.isSuccessful = true;
        this.feedbackForm.reset();
      }
    );
  }

}
