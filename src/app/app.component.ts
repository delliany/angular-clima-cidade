import { Component } from '@angular/core';
import { ClimaService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-clima-cidade';
  cidade = 'Brasilia';
  dadosClima: any = {};
  mostraDados = false;

  constructor(private climaService: ClimaService) { }

  obterClimaCidade() {
    this.climaService.getClima(this.cidade).subscribe((data: {}) => {
      console.log('dadosClima: ', data);
      this.dadosClima = data;
      this.mostraDados = true;
    });

  }
}

// {
//   "coord": {
//       "lon": -47.9297,
//       "lat": -15.7797
//   },
//   "weather": [
//       {
//           "id": 802,
//           "main": "Clouds",
//           "description": "scattered clouds",
//           "icon": "03n"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 299.66,
//       "feels_like": 299.66,
//       "temp_min": 299.61,
//       "temp_max": 299.66,
//       "pressure": 1014,
//       "humidity": 54
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 3.09,
//       "deg": 10
//   },
//   "clouds": {
//       "all": 40
//   },
//   "dt": 1663794562,
//   "sys": {
//       "type": 1,
//       "id": 8336,
//       "country": "BR",
//       "sunrise": 1663750930,
//       "sunset": 1663794453
//   },
//   "timezone": -10800,
//   "id": 3469058,
//   "name": "Brasília",
//   "cod": 200
// }
