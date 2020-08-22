import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';
import { Detailemp } from '../shared/detailemp.model';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  constructor(public service : DataserviceService) { }

  ngOnInit() {
    this.service.refreshlist();
  }

  showdetails(emp : Detailemp)
  {
    this.service.formData = Object.assign({},emp);
  }

}
