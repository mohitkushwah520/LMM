import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';


// class modal
import { AboutUs } from '../modal/about-us'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AllServicesService {


  baseUrl = '/assets/staticJSON/'
  blogsUrl = 'http://13.126.112.148:5656/blogs';
  constructor(private http : HttpClient) { }

  home_ourRecent(){
    return this.http.get(this.baseUrl + 'home.json').pipe(
      map(res =>{
        return res[0].ourRecent
      })
    );
  }

  home_services(){
    return this.http.get(this.baseUrl + 'home.json').pipe(
      map(res =>{
        return res[1].services
      })
    )
  }
  home_client(){
    return this.http.get(this.baseUrl+'client.json');
  }
  aboutUS():Observable<AboutUs>{
    return this.http.get<AboutUs>(this.baseUrl + 'aboutUs.json');
  }

  serviceDetailBanner(slug){
    return this.http.get(this.baseUrl+'serviceDetail/'+slug+'.json').pipe(
      map(res =>{
        return res[0].banner
      })
    );
  }
  serviceDetailpageContent(slug){
    return this.http.get(this.baseUrl+'serviceDetail/'+slug+'.json').pipe(
      map(res =>{
        return res[1]
      })
    );
  }

  blogs(){
    return this.http.get(this.blogsUrl).pipe(
      map(res =>{
        var data = Object.entries(res)[1]
        return data[1];
      })
    );
  }

  ourProcess(){
    return this.http.get(this.baseUrl+'ourProcess.json');
  }

}
