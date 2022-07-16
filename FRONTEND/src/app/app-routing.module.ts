import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessegesComponent } from './messeges/messeges.component';

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
  {path:"**",component:HomePageComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
