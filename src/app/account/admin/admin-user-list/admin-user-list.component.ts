import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { Observable } from 'rxjs';
import { IUser } from './../../services/user.model';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { MatFormFieldControl } from '@angular/material/form-field'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  user:IUser[];

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  constructor(private adminService:AdminService, private tokenStorageService:TokenStorageService, private router:Router) { }

  displayedColumns: string[] = ['id', 'fullname', 'email', 'contact', 'action'];
  dataSource;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
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
    
    this.adminService.getAllUser().subscribe(
      (IUser) =>{ this.user = IUser
        this.dataSource =new MatTableDataSource<IUser>(this.user)
        this.dataSource.paginator = this.paginator;
      }
    );
  }


  deleteUser(id:any) {
    this.adminService.deleteUserById(id).subscribe(
      data =>{
        alert("Successfully deleted the user account");
        window.location.reload();
      }
    );
  }

}

