import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navlinks = [
    {
      label: 'Create user',
      route: ['/home']
    },
    {
      label: 'Users',
      route: ['/home', 'users']
    }
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }
}
