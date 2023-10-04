import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   dashboard:string=" "
   addproduct:boolean=false
   editproduct:boolean=false
   allusers:boolean=false
   addadmin:boolean=false
   flag:boolean=true
   constructor(){
  // this.editproducthandle()
   }
 
   addproducthandle(){
  
    this.addproduct=true
    this.editproduct=false
    this.allusers=false
    this.addadmin=false
   }

   editproducthandle(){

    this.addproduct=false
    this.editproduct=true
    this.allusers=false
    this.addadmin=false
  
   }
   showalluser(){
    
    this.addproduct=false
    this.editproduct=false
    this.allusers=true
    this.addadmin=false
   }

   addadminfun(){
    this.addproduct=false
    this.editproduct=false
    this.allusers=false
    this.addadmin=true
   }
   
   
}
