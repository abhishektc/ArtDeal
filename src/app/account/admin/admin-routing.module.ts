import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NewArtistApprovalComponent } from './new-artist-approval/new-artist-approval.component';
import { AdminArtistProfileViewComponent } from './admin-artist-profile-view/admin-artist-profile-view.component';
import { NewPaintingsListComponent } from './new-paintings-list/new-paintings-list.component';
import { NewPaintingsViewComponent } from './new-paintings-view/new-paintings-view.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminArtistListComponent } from './admin-artist-list/admin-artist-list.component';
import { AdminOrderStatusViewComponent } from './admin-order-status-view/admin-order-status-view.component';
import { AdminFeedbackViewComponent } from './admin-feedback-view/admin-feedback-view.component';

const routes: Routes = [
  {path:"admin/login", component:AdminLoginComponent},
  {path:"admin/newArtistApproval", component:NewArtistApprovalComponent},
  {path:"admin/artistProfileView/:id", component:AdminArtistProfileViewComponent},
  {path:"admin/newPaintingsList", component:NewPaintingsListComponent},
  {path:"admin/newPaintingsView/:id", component:NewPaintingsViewComponent},
  {path:"admin/artistList", component:AdminArtistListComponent},
  {path:"admin/userList", component:AdminUserListComponent},
  {path:"admin/userProfile/:id", component:UserProfileViewComponent},
  {path:"admin/orderStatusView", component:AdminOrderStatusViewComponent},
  {path:"admin/feedback", component:AdminFeedbackViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
