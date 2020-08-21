import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  constructor(private service : DataserviceService) { }

  ngOnInit(): void {
  }

}
