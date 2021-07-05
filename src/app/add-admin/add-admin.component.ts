import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  admin : Admin = new Admin();
  //admin:any;

  constructor(private adminService : AdminService , private router: Router) { }

  ngOnInit(): void {
   // this.saveAdmin();
  }

  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data =>
      {console.log(data);  this.goToAdminList();}, error => console.log(error));

      
  }

  goToAdminList(){
    this.router.navigate(["/getAdminList"]);

  }
  onSubmit(value:any){
    this.admin.adminName = value.adminName;
    this.admin.contactNumber = value.contactNumber;
    this.admin.email = value.email;
    this.admin.password = value.password;
    this.saveAdmin();

    console.log(this.admin);
  
  }

}
