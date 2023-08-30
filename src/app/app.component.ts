import { Component, OnInit, inject } from '@angular/core';
import { UserResponse, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-cfi';
  userService = inject(UserService);
  userResponse: UserResponse | null = null;

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe({
        next: (response) => {
          this.userResponse = response;
        },
        error: (err) => {
          console.log({ err });
        }
      })
  }
}
