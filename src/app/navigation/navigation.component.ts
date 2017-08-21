import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title = 'Navigation';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
