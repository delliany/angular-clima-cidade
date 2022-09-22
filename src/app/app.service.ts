import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private API_KEY = "51f76c5c8a3dd280b0e38d2e657caacf";

  constructor(private httpClient: HttpClient) { }

  public getClima(cidade: String){

    const URL_OPEN_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&&APPID=${this.API_KEY}&units=metric`;
    return this.httpClient.get(URL_OPEN_WEATHER);
  }
}