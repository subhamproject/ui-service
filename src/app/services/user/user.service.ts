import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _root = '/api';

  private _users: any = [];
  private _users$ = new BehaviorSubject(this._users);

  users$ = this._users$.asObservable();


  private _userProcess = false;
  private _userProcess$ = new BehaviorSubject(this._userProcess);

  userProcess$ = this._userProcess$.asObservable();

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = `${this._root}/users`;
    this.http.get(url).subscribe({
      next: (value) => {
        this._users = value || [];
        this._users$.next(this._users);
      },
      error: (e) => {
        console.error('Error while fetching users', e);
      }
    });
  }

  setUserProcess(status: boolean) {
    this._userProcess = status;
    this._userProcess$.next(this._userProcess);
  }

  addUser(name: string) {
    const url = `${this._root}/user`;
    this.http.post(url, { name }).subscribe({
      next: (value) => {
        this.setUserProcess(false);
      }
    });
  }


  getUser(id: any) {
    const url = `${this._root}/user/order`;
    this.http.get(url, { params: { id } }).subscribe({
      next: (value) => {
        console.log('getuser result', value);
      },
      error: (e) => {
        console.error('Error while fetching user', e);
      }
    });
  }


}
