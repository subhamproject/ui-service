import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  source: any = [];

  constructor(private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.users$.subscribe((data) => {
      this.source = data;
    });
  }

  openUserForm() {
    this.modalService.open(UserFormComponent, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
