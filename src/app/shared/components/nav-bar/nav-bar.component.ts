import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  logInStatus: boolean = false;
}
