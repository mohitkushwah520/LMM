import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Ourwork }from '../modal/ourwork';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurworkService {
  private workUrl = 'http://13.126.112.148:5656/workdetail';
  private blogsUrl = 'http://13.126.112.148:5656/blogs';


  constructor(private http : HttpClient) { }

  workdetail() : Observable<Ourwork>{
    return this.http.get<Ourwork>(this.workUrl).pipe(map(res =>{
      var data = Object.entries(res)[1]
      return data[1];
    }));
  }

  getblogsdetail(){
    return this.http.get(this.blogsUrl).pipe(
      map(res =>{
        var data = Object.entries(res)[1]
        return data[1];
      })
    );
  }

  ourprocess(){
    return this.http.get('https://assets3.lottiefiles.com/packages/lf20_8izyldes.json');
  }
}
