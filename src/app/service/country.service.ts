import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCountry() {
    const paramsObj = { fields: 'flags,name,cca2,cca3,nativeName,altSpellings,idd,region,subregion,population,continents,timezones,status'}
    const params = new HttpParams({ fromObject: paramsObj })
    return this.http.get(`${environment.env}/all`, { params: params })
  }

}
