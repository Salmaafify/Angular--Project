import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
