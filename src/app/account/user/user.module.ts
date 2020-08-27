import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { PortraitArtistComponent } from './portrait-artist/portrait-artist.component';
import { WallArtistComponent } from './wall-artist/wall-artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { PaintDetailsComponent } from './paint-details/paint-details.component';
import { UserProfileAndDetailsModule } from './user-profile-and-details/user-profile-and-details.module';
import { ArtistInfoComponent } from './paint-details/artist-info/artist-info.component';
import { AllPaintingsComponent } from './all-paintings/all-paintings.component';
import { PaintingArtistNameComponent } from './all-paintings/painting-artist-name/painting-artist-name.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    ArtistlistComponent,
    PortraitArtistComponent,
    WallArtistComponent,
    ArtistDetailsComponent,
    PaintDetailsComponent,
    ArtistInfoComponent,
    AllPaintingsComponent,
    PaintingArtistNameComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    UserProfileAndDetailsModule,
    MatProgressSpinnerModule,
  ]
})
export class UserModule { }
