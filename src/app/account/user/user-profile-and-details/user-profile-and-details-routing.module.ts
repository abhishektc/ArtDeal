import { UserNotificationComponent } from './user-notification/user-notification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCartComponent } from './user-cart/user-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrdersViewDetailsComponent } from './my-orders-view-details/my-orders-view-details.component';


const routes: Routes = [
  {path:"user/cart", component:UserCartComponent},
  {path:"user/myOrders", component:MyOrdersComponent},
  {path:"user/myOrderDetails/:id", component:MyOrdersViewDetailsComponent},
  {path:"user/notification", component:UserNotificationComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileAndDetailsRoutingModule { }
