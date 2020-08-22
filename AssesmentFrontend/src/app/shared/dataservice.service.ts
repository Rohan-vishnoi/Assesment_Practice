import { Injectable } from '@angular/core';
import { Detailemp } from './detailemp.model';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  formData : Detailemp;
  list : Detailemp[];
  readonly rootURL = "https://localhost:44396/api"
  constructor(private http : HttpClient) { }

  postemployeedetail(formData : Detailemp) 
  {
   return this.http.post(this.rootURL + '/Employees',formData);
  }

  refreshlist(){
    return this.http.get(this.rootURL+ '/Employees').toPromise().then(res => this.list = res as Detailemp[]);
  }

  putemployeedetail(formData : Detailemp) 
  {
   return this.http.put(this.rootURL + '/Employees/' + formData.EmployeeID,formData);
  }

}
