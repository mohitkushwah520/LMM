import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {

  constructor(private http : HttpClient) { }
   public caseStudyUrl = '../../assets/staticJSON/caseStudy.json'
  caseStudy(){
    return this.http.get(this.caseStudyUrl)
  }
}
