import { Component ,OnInit } from '@angular/core';
import { GlobalserviceService } from './services/globalservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeeApp';
  usercheck:boolean = true
  user:any
  
  constructor(private service:GlobalserviceService){
  
  
   
  }
 
  ngOnInit(){
    this.service.showMyProfile().subscribe(res => {
      this.user = res.data

      console.log( "usertype",this.user.user.userType)       
        if(this.user.user.userType =="admin")
        { 
          this.usercheck = false

        }
        else{
          this.usercheck = true
        }
        // window.location.reload()
    
    })
  }

  
}
