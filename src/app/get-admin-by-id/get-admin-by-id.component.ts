import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-get-admin-by-id',
  templateUrl: './get-admin-by-id.component.html',
  styleUrls: ['./get-admin-by-id.component.css']
})
export class GetAdminByIdComponent implements OnInit {

  id:number=0;
  admin : Admin= new Admin();
  @ViewChild('id') inputId :any;

  constructor(private adminService : AdminService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.admin= data; console.log(data);
    },
    error => console.log(error));

  }
  // getAdmin(value:any){
  //   this.id = this.route.snapshot.params['id'];
  //   this.adminService.getAdminById(this.id).subscribe(data => {
  //     this.admin= data; console.log(data);
  //   },
  //   error => console.log(error));

  // }

}
