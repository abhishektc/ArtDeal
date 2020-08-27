import { MatListModule } from '@angular/material/list';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistRegisterComponent } from './artist-register/artist-register.component';
import { ArtistLoginComponent } from './artist-login/artist-login.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewPaintingsComponent } from './add-new-paintings/add-new-paintings.component';
import { ArtistProfileAndPriceComponent } from './artist-profile-and-price/artist-profile-and-price.component';
import { RequestPortraitAndWallComponent } from './request-portrait-and-wall/request-portrait-and-wall.component';
import { ArtistViewOrderComponent } from './artist-view-order/artist-view-order.component';
import { UserNameComponent } from './request-portrait-and-wall/user-name/user-name.component';
import { PortraitOrWallpaintRequestViewComponent } from './portrait-or-wallpaint-request-view/portrait-or-wallpaint-request-view.component';
import { UserInfoComponent } from './portrait-or-wallpaint-request-view/user-info/user-info.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ArtistViewOrderSubComponent } from './artist-view-order/artist-view-order-sub/artist-view-order-sub.component';
import { ArtistViewOrderPaintPwtNameComponent } from './artist-view-order/artist-view-order-paint-pwt-name/artist-view-order-paint-pwt-name.component';
import { ArtistViewOrderUserDetailsComponent } from './artist-view-order/artist-view-order-sub/artist-view-order-user-details/artist-view-order-user-details.component';
import { ArtistViewOrderReviewComponent } from './artist-view-order/artist-view-order-review/artist-view-order-review.component';

@NgModule({
  declarations: [
    ArtistRegisterComponent,
    ArtistLoginComponent,
    AddNewPaintingsComponent,
    ArtistProfileAndPriceComponent,
    RequestPortraitAndWallComponent,
    ArtistViewOrderComponent,
    UserNameComponent,
    PortraitOrWallpaintRequestViewComponent,
    UserInfoComponent,
    ArtistViewOrderSubComponent,
    ArtistViewOrderPaintPwtNameComponent,
    ArtistViewOrderUserDetailsComponent,
    ArtistViewOrderReviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ArtistRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatButtonModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule
  ]
})
export class ArtistModule { }
