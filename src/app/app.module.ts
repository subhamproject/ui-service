import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { UserTableComponent } from './components/users/user-table/user-table.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/users/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTableComponent,
    UserFormComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
