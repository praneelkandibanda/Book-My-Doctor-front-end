import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  //admins: Admin[] = [];
  admins : any;
  id: number=0;

  constructor(private adminService : AdminService , private router: Router) { }

  ngOnInit(): void {


    this.adminService.getAdminList().subscribe(data => this.admins = data);

  }

  // updateAdmin(id : number){
 
  //   this.router.navigate(['/updateAdmin', id]);
  // }

  // getAdminById(id: number){
  //   this.router.navigate(['/getAdminById', id]);

  // }
  deleteAdmin(id: number){
    // this.id=value;
    this.adminService.deleteAdmin(id).subscribe(data => {console.log(data); this.goToAdminList();},
      error => console.log(error));
      // this.message="Admin with Id "+value+" is successfully deleted!!" 
  }

  goToAdminList(){
    this.router.navigate(["/getAdminList"]);

  }



}
