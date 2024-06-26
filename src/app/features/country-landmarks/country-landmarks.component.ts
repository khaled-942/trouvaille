import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ShowLandMarksService } from '../../shared/services/show-land-marks.service';
@Component({
  selector: 'app-country-landmarks',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './country-landmarks.component.html',
  styleUrl: './country-landmarks.component.scss',
})
export class CountryLandmarksComponent implements OnInit {
  showLandMarksService = inject(ShowLandMarksService);
  weatherData: any;
  weatherDataStatus: boolean = false;
  hideLandMark() {
    this.showLandMarksService.swithPanelStatus(false);
  }
  ngOnInit(): void {
    this.showLandMarksService.errorObs.subscribe({
      next:(errorNumber)=>{
        if(errorNumber === 404){
          this.weatherDataStatus = false;
        }
        else{
          this.weatherDataStatus = true;
          this.showLandMarksService.weatherDataObs.subscribe({
            next: (data) => {
                this.weatherData = data;
            },
          });
        }
      }
    })
  }
}
