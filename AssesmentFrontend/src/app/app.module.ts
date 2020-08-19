import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { AddEmployeestatusComponent } from './add-employeestatus/add-employeestatus.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeStatusComponent,
    AddEmployeestatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
