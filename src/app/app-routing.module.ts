import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedbackComponent } from './account/feedback/feedback.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:'feedback', component:FeedbackComponent},
  {path:"**", component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
