import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ks-profile-details-menu',
  templateUrl: './profile-details-menu.component.html',
  styleUrls: ['./profile-details-menu.component.scss']
})
export class ProfileDetailsMenuComponent {
  constructor(private router: Router) {
  }

  edit() {
    this.router.navigate(['/your-profile/edit']);
  }
}
