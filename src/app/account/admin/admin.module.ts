import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { NewArtistApprovalComponent } from './new-artist-approval/new-artist-approval.component';
import { AdminArtistProfileViewComponent } from './admin-artist-profile-view/admin-artist-profile-view.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewPaintingsListComponent } from './new-paintings-list/new-paintings-list.component';
import { NewPaintingsViewComponent } from './new-paintings-view/new-paintings-view.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminArtistListComponent } from './admin-artist-list/admin-artist-list.component';
import { AdminFeedbackViewComponent } from './admin-feedback-view/admin-feedback-view.component';
import { AdminOrderStatusViewComponent } from './admin-order-status-view/admin-order-status-view.component';
import { AdminOrderStatusViewUserNameComponent } from './admin-order-status-view/admin-order-status-view-user-name/admin-order-status-view-user-name.component';
import { AdminOrderStatusViewArtistNameComponent } from './admin-order-status-view/admin-order-status-view-artist-name/admin-order-status-view-artist-name.component';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';


@NgModule({
  declarations: [AdminLoginComponent, NewArtistApprovalComponent, AdminArtistProfileViewComponent, NewPaintingsListComponent, NewPaintingsViewComponent, AdminUserListComponent, AdminArtistListComponent, AdminFeedbackViewComponent, AdminOrderStatusViewComponent, AdminOrderStatusViewUserNameComponent, AdminOrderStatusViewArtistNameComponent, UserProfileViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
