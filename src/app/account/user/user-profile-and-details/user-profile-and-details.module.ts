import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserProfileAndDetailsRoutingModule } from './user-profile-and-details-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLineModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { UserCartChildComponent } from './user-cart/user-cart-child/user-cart-child.component';
import { UserCartGetArtistNameComponent } from './user-cart/user-cart-child/user-cart-get-artist-name/user-cart-get-artist-name.component';
import { UserCartPaintingsImageComponent } from './user-cart/user-cart-paintings-image/user-cart-paintings-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrderNameComponent } from './my-orders/my-order-name/my-order-name.component';
import { MyOrdersViewDetailsComponent } from './my-orders-view-details/my-orders-view-details.component';
import { MyOrdersViewPaintingsInfoComponent } from './my-orders-view-details/my-orders-view-paintings-info/my-orders-view-paintings-info.component';
import { MyOrdersViewArtistInfoComponent } from './my-orders-view-details/my-orders-view-paintings-info/my-orders-view-artist-info/my-orders-view-artist-info.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';



@NgModule({
  declarations: [UserCartComponent, UserCartChildComponent, UserCartGetArtistNameComponent, UserCartPaintingsImageComponent, MyOrdersComponent, MyOrderNameComponent, MyOrdersViewDetailsComponent, MyOrdersViewPaintingsInfoComponent, MyOrdersViewArtistInfoComponent, UserNotificationComponent,],
  imports: [
    CommonModule,
    RouterModule,
    UserProfileAndDetailsRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatLineModule,
    MatMenuModule,
    LayoutModule,
    MatListModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatBadgeModule,

  ]
})
export class UserProfileAndDetailsModule { }
