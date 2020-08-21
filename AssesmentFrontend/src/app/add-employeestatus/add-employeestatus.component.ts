import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employeestatus',
  templateUrl: './add-employeestatus.component.html',
  styleUrls: ['./add-employeestatus.component.css']
})
export class AddEmployeestatusComponent implements OnInit {

  constructor(public service : DataserviceService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EmployeeID :null,
      FullName : '',
      RollCode :null,
      Status : null,   
      Email :''
    }
    }

}
