import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-add-employeestatus',
  templateUrl: './add-employeestatus.component.html',
  styleUrls: ['./add-employeestatus.component.css']
})
export class AddEmployeestatusComponent implements OnInit {

   constructor(public service : DataserviceService, public toastr : ToastrService) {
    // role : Number[] = ['1','2']
   }

  ngOnInit() {
    this.resetForm();
    $('[data-toggle="popover"]').popover();
  }

 

  resetForm(form? : NgForm) {
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EmployeeID :null,
      FullName : '',
      RollCode :null,
      Status : null,   
      Email :'',
      MobileNumber:null
    }
    }

    onSubmit(form : NgForm) {
      debugger;
      if(form.value.EmployeeID == null ) {
      this.insertrecord(form);
      } else {
        this.updaterecord(form)

      }
    }

    insertrecord(form : NgForm){
      this.service.postemployeedetail(form.value).subscribe(res => {
        this.service.refreshlist();
        this.toastr.success('Inserted Successfully' , 'EMP. REGISTER')
        this.resetForm(form)
      })
    }
    
    updaterecord(form : NgForm){
      this.service.putemployeedetail(form.value).subscribe(res => {
        this.service.refreshlist();
        this.toastr.warning('Updated Successfully' , 'EMP. REGISTER')
        this.resetForm(form)
      })
    }

}
 