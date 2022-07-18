import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Errors/error.component';
import { AuthGuard } from './guard/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessegesComponent } from './messeges/messeges.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServererrorComponent } from './servererror/servererror.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {
    path:"",
    runGuardsAndResolvers:"always",
    canActivate:[AuthGuard],
    children:[
        {path:"members",component:MemberListComponent},
        {path:"members/:id",component:MemberDetailsComponent},
        {path:"messeges",component:MessegesComponent},
        {path:"lists",component:ListsComponent},
      ]
  },
  {path:"error",component:ErrorComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"server-error",component:ServererrorComponent},
  {path:"**",component:NotFoundComponent,pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
