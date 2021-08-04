import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  id:number = 0;
  user:any;
  constructor(private myService:UsersService,private myActivated:ActivatedRoute) { 
    this.id = myActivated.snapshot.params.id
  }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{
        this.user = res
      },
      (err)=>{
        console.log(err)
      } 
    )
  }

}
