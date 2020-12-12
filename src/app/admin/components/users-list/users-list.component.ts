import { Component, OnInit } from '@angular/core';
import {User, Users} from '../../../users/types/user';
import {UsersServerService} from '../../../users/repositories/users-server.service';
import {ElementToDelete} from '../../../common/types/element-to-delete';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Users = [];

  constructor(private usersService: UsersServerService) {}

  ngOnInit(): void {
    this.usersService
      .query()
      .subscribe(
        users => this.users = users,
        err => console.log(err)
      );
  }

  deleteUser(user: ElementToDelete<User>) {
    this.usersService
      .delete(user.element.id)
      .subscribe(_ => {
        this.openSnackbar();
        return this.users.splice(user.index, 1)
      }, err => console.log(err));
  }

  private openSnackbar() {
    const snackbar = document.querySelector('.snackbar');

    snackbar.classList.add('show');

    setTimeout(() =>
        snackbar.classList.remove('show'),
      3000
    );
  }
}
