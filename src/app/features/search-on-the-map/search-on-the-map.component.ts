import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ShowLandMarksService } from '../../shared/services/show-land-marks.service';
import { CountryWeatherService } from '../../shared/services/country-weather.service';

@Component({
  selector: 'app-search-on-the-map',
  standalone: true,
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-on-the-map.component.html',
  styleUrl: './search-on-the-map.component.scss',
})
export class SearchOnTheMapComponent {
  showLandMarksService = inject(ShowLandMarksService);
  _weatherService = inject(CountryWeatherService);
  searchForm: FormGroup | any;
  inputValue: string = '';
  errorMessageNumber!: number;
  ngOnInit() {
    this.searchForm = new FormGroup({
      text: new FormControl<string | null>(null),
    });
  }
  showPanel() {
    this.inputValue = this.searchForm?.controls['text'].value;
    if (this.inputValue) {
      this.showLandMarksService.swithPanelStatus(true);
      this._weatherService.getWeatherByCountry(this.inputValue).subscribe({
        next: (data) => {
          this.showLandMarksService.errorDataInfo(0);
          this.showLandMarksService.weatherDataInfo(data);
        },
        error: (e) => {
          this.showLandMarksService.errorDataInfo(e.status);
        },
      });
    }
    // this.searchForm.reset()
  }
}
