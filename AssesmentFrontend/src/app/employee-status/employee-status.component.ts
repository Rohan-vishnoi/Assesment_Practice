import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';
import { Detailemp } from '../shared/detailemp.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  constructor(public service : DataserviceService ,  public toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshlist();
  }

  showdetails(emp : Detailemp)
  {
    debugger;
    this.service.formData = Object.assign({},emp);
  }

  Ondelete(id : number){
    this.service.deleteEmployeedetail(id).subscribe(res => {
      debugger;
      this.service.refreshlist();
      this.toastr.warning('Delated Succesfully', 'EMP. RESGISTER')
    })
  }

}
