import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UserTableComponent } from './components/users/user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/create-user'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UserTableComponent
      },
      {
        path: 'create-user', // child route path
        component: CreateUserComponent, // child route component that the router renders
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create-user'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
