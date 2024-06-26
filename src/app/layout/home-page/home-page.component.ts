import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CountryLandmarksComponent } from '../../features/country-landmarks/country-landmarks.component';
import { SearchOnTheMapComponent } from '../../features/search-on-the-map/search-on-the-map.component';
import { ShowLandMarksService } from '../../shared/services/show-land-marks.service';
import { HomePageTextComponent } from '../../features/home-page-text/home-page-text.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavBarComponent,
    SearchOnTheMapComponent,
    FooterComponent,
    CountryLandmarksComponent,
    HomePageTextComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  showLandMarksService = inject(ShowLandMarksService);
  landMarksStatus: boolean = false;
  ngOnInit(): void {
    this.showLandMarksService.showPanelObs.subscribe({
      next: (status) => {
        this.landMarksStatus = status;
      },
    });
  }
}
