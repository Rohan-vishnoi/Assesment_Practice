import { Injectable } from '@angular/core';
import { Detailemp } from './detailemp.model';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  formData : Detailemp
  readonly rootURL = "https://localhost:44396/api"
  constructor(private http : HttpClient) { }

  postemployeedetail(formData : Detailemp) 
  {
   return this.http.post(this.rootURL + '/Employees',formData);
  }
}
