import { Component, OnInit, Optional } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  username = '';
  isSubmitted = false;
  sub: any;
  showSuccess = false;

  constructor(@Optional() public model: NgbActiveModal, private userService: UserService) {
  }

  ngOnInit(): void {
    this.showSuccess = false;
    this.isSubmitted = false;
    this.sub = this.userService.userProcess$.subscribe((isRunning) => {
      console.log('user process running', isRunning);
      if (this.isSubmitted && !isRunning) {
        this.showSuccess = true;
        this.dismiss();
      }
    });
  }


  dismiss() {
    if (this.model) {
      this.model.dismiss();
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.username = '';
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  createUser() {
    this.isSubmitted = true;
    this.userService.setUserProcess(true);
    console.log('creating user', this.username);
    this.userService.addUser(this.username);
  }
}
