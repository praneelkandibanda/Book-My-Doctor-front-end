import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, IAdmin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8082/admin/"
  constructor(private http :HttpClient) { }

  getAdminList(): Observable<Admin[]>{
    
    return this.http.get<IAdmin[]>("http://localhost:8082/admin/fetchAllAdmin");

   // return this.httpClient.get<IAdmin[]>(`${this.baseUrl}`+`fetchAllAdmin`);
  }

  createAdmin(admin : Admin): Observable<Object>{
    //return this.http.post("http://localhost:8082/admin/save",admin);
   // return this.http.post(`${this.baseUrl}`+`save` , admin);
    return this.http.put("http://localhost:8082/admin/update",admin);


  }

  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}`+`update` , admin);

  }

  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>("http://localhost:8082/admin/fetchAdmins/"+`${id}`​​​);

  }

  deleteAdmin(id:number):Observable<Object>{
   // console.log(`${this.baseURL}`+`delete/${id}`);
    return this.http.delete("http://localhost:8082/admin/deleteAdmin/"+`${id}`​​​);

  }



}
