import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminComponent } from './admin/admin.component';
//import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { GetAdminByIdComponent } from './get-admin-by-id/get-admin-by-id.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientComponent } from './patient/patient.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path : 'getAdminList', component : AdminListComponent },
  {path : 'createAdmin' , component : AddAdminComponent},
  { path: 'updateAdmin/:id', component: UpdateAdminComponent},
  { path: 'getAdminById/:id',component:GetAdminByIdComponent},
  //{ path : 'deleteAdminById/:id' , component: DeleteAdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
