import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { PortraitArtistComponent } from './portrait-artist/portrait-artist.component';
import { WallArtistComponent } from './wall-artist/wall-artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { PaintDetailsComponent } from './paint-details/paint-details.component';
import { AllPaintingsComponent } from './all-paintings/all-paintings.component';

const routes: Routes = [
  {path:"user/register", component:UserRegisterComponent},
  {path:"user/login", component:UserLoginComponent},
  {path:"artistlist", component:ArtistlistComponent},
  {path:"portraitArtist", component:PortraitArtistComponent},
  {path:"wallArtist", component:WallArtistComponent},
  {path:"artist/artistDetails/:id", component:ArtistDetailsComponent},
  {path:"artist/paintDetails/:id", component:PaintDetailsComponent},
  {path:"artist/allPaintings", component:AllPaintingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
