import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistRegisterComponent } from './artist-register/artist-register.component';
import { ArtistLoginComponent } from './artist-login/artist-login.component';
import { AddNewPaintingsComponent } from './add-new-paintings/add-new-paintings.component';
import { ArtistProfileAndPriceComponent } from './artist-profile-and-price/artist-profile-and-price.component';
import { RequestPortraitAndWallComponent } from './request-portrait-and-wall/request-portrait-and-wall.component';
import { ArtistViewOrderComponent } from './artist-view-order/artist-view-order.component';
import { PortraitOrWallpaintRequestViewComponent } from './portrait-or-wallpaint-request-view/portrait-or-wallpaint-request-view.component';

const routes: Routes = [
  {path:"artist/register", component:ArtistRegisterComponent},
  {path:"artist/login", component:ArtistLoginComponent},
  {path:"addNewPaintings", component:AddNewPaintingsComponent},
  {path:"artist/profile", component:ArtistProfileAndPriceComponent},
  {path:"artist/viewOrder", component:ArtistViewOrderComponent},
  {path:"artist/request", component:RequestPortraitAndWallComponent},
  {path:"artist/portraitView/:id", component:PortraitOrWallpaintRequestViewComponent},
  {path:"artist/wallPaintView/:id", component:PortraitOrWallpaintRequestViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
