import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { Orders } from './../../services/model/orders.model';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-order-status-view',
  templateUrl: './admin-order-status-view.component.html',
  styleUrls: ['./admin-order-status-view.component.css']
})
export class AdminOrderStatusViewComponent implements OnInit {

  order:Orders[];

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  constructor(private adminService:AdminService, private tokenStorageService:TokenStorageService, private router:Router) { }

  displayedColumns: string[] = ['id', 'userid', 'artistid', 'status'];
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

    this.adminService.getAllOrders().subscribe(
      (Orders) =>{
        this.order = Orders
        this.dataSource =new MatTableDataSource<Orders>(this.order)
        this.dataSource.paginator = this.paginator;

      }
    );
  }

}
