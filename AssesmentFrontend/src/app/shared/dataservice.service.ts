import { Injectable } from '@angular/core';
import { Detailemp } from './detailemp.model';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  formData : Detailemp

  constructor() { }
}
