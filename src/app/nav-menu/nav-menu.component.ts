import { Component, OnInit, INJECTOR } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from '../account/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showArtistBoard = false;
  showUserBoard = false;
  username: string;

  constructor(private breakpointObserver: BreakpointObserver, private tokenStorageService: TokenStorageService, private _router:Router) {}
  
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showArtistBoard = this.roles.includes('ROLE_ARTIST');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.fullname;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
    this._router.navigate(['home']);
  }

}
