import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopTabComponent } from './top-tab/top-tab.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { GetAdminByIdComponent } from './get-admin-by-id/get-admin-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    TopTabComponent,
    AdminListComponent,
    AddAdminComponent,
    MainPageComponent,
    AdminComponent,
    DoctorComponent,
    PatientComponent,
    DoctorListComponent,
    UpdateAdminComponent,
    GetAdminByIdComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
