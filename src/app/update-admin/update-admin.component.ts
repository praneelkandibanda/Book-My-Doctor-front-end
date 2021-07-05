import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  id: number = 0;
  //@Input() public parentData: any;
 
  adminDetails : Admin = new Admin ;

  //admin : any;

  constructor(private adminService: AdminService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.adminService.getAdminById(this.id).subscribe(data => { this.adminDetails = data; },
      error => console.log(error));
    // this.adminService.getAdminById(this.id).subscribe(data =>
    //   {console.log(data); this.goToAdminList();}, error => console.log(error));

  }
  updateAdmin(){
    this.adminService.updateAdmin(this.adminDetails).subscribe(data =>{this.adminDetails=data;
      console.log(this.adminDetails); this.goToAdminList();}, error => console.log(error));

      
  }

  goToAdminList(){
    this.router.navigate(["/getAdminList"]);

  }


}
