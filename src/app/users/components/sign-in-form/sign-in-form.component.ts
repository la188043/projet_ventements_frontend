import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';
import {catchError} from 'rxjs/operators';
import {Users} from '../../types/user';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signInFrom: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwordUser: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private usersService: UsersServerServiceService) { }

  ngOnInit(): void {
    // TODO A retirer test
    this.usersService.query()
      .subscribe(
        users => console.log(users),
        err => console.log(err.error.message)
      );
  }

  submit(): void {
    this.usersService.authenticate(this.signInFrom.value)
      .subscribe(user => {
        console.log(user);
      });
  }
}
