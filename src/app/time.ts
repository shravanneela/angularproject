import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import{ Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root',
})
export class Time {
  constructor(private http: HttpClient) {}

  getCurrentTime() {
    return this.http.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata');
  
  }
  getcurrentLocation() {
    return this.http.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=17.375&longitude=78.5&localityLanguage=en');
  }
}