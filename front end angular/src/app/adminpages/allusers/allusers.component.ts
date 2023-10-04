import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {
  allusers:any
  i:any
  constructor(private activate: ActivatedRoute, private service: GlobalserviceService) { }
  ngOnInit() {
    
    this.activate.paramMap.subscribe((param :any)=> {


      this.service.getAllUsers().subscribe(res => {
        this.allusers = res.data
        console.log(this.allusers)
      
      }

      )

    })

  }
}
