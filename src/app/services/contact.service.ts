import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private contactURL = 'http://13.126.112.148:5656/contactus';
  constructor(private http : HttpClient) { }

  contactform(data){
    return this.http.post<any>(this.contactURL,data);
  }
}
