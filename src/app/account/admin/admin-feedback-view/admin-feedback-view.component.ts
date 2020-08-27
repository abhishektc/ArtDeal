import { IFeedback } from './../../services/model/feedback.models';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from './../../services/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-feedback-view',
  templateUrl: './admin-feedback-view.component.html',
  styleUrls: ['./admin-feedback-view.component.css']
})
export class AdminFeedbackViewComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  feedback:IFeedback[];

  constructor(private tokenStorageService:TokenStorageService, private router:Router, private adminService:AdminService) { }

  displayedColumns: string[] = ['sno', 'fullname', 'email', 'subject', 'message', 'action'];
  dataSource;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      if (!this.showAdminBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this.router.navigate(['home']);
      }
    }else{
      alert("Sorry, you don't have a permission to access this.");
      this.router.navigate(['home']);
    }

    this.adminService.getAllFeedback().subscribe(
      (IFeedback) =>{ this.feedback = IFeedback
        this.dataSource =new MatTableDataSource<IFeedback>(this.feedback)
        this.dataSource.paginator = this.paginator;
      }
    );

  }

  deleteFeedback(id:any) {
    this.adminService.deleteFeedbackById(id).subscribe(
      data =>{
        alert("Successfully deleted the Feedback");
        window.location.reload();
      }
    );
  }
}
