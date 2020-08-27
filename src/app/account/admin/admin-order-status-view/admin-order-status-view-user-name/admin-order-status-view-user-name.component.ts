import { User } from 'src/app/account/services/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/account/services/admin.service';

@Component({
  selector: 'app-admin-order-status-view-user-name',
  templateUrl: './admin-order-status-view-user-name.component.html',
  styleUrls: ['./admin-order-status-view-user-name.component.css']
})
export class AdminOrderStatusViewUserNameComponent implements OnInit {

  @Input()
  userid:any;

  user:User;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUserById(this.userid).subscribe(
      (User) => this.user = User
    );
  }

}
