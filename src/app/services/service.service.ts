import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  baseURl = "/assets/staticJSON/service.json"

  constructor(private http : HttpClient) { }

  getservice(){
    return this.http.get(this.baseURl);
  }
}
