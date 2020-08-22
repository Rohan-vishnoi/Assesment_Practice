import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { AddEmployeestatusComponent } from './add-employeestatus/add-employeestatus.component';
import { DataserviceService } from './shared/dataservice.service'
import { HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeStatusComponent,
    AddEmployeestatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
