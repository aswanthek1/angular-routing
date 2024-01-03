import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);
  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queryies) => {
      const logout = Boolean(queryies.get('logout'));
      if(logout) {
        this.authService.logout();
        alert("You are now logged out isLogged = " + this.authService.isLogged)
      }
    })
  }

  onLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password)
    if(user === undefined) {
      alert("Check the credentials")
    }
    else {
      alert('Welcome '+user.name+'! You are logged.')
      this.router.navigate(['products'])
    }
  }
}
