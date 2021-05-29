import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService,
              private route: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logout({ returnTo: document.location.origin });
  }

  login() {
    this.auth.loginWithRedirect({redirect_uri: window.location.origin});
  }

}
