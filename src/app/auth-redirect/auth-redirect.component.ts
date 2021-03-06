import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../shared';

@Component({
  selector: 'app-auth-redirect',
  template: '<div></div>'
})
export class AuthRedirectComponent implements OnInit {

  private done = false;
  constructor(
    private router: Router,
    private storage: SessionStorageService
  ) {}

  ngOnInit() {
    this.router
    .routerState
    .root
    .queryParams
    .subscribe(params => {
      if (!this.done) {
        this.storage.setValue('access_token', params['access_token']);
        this.done = true;
        this.router.navigate(['/home']);
      }
    });
  }

}
