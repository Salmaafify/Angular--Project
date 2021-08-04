import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService) { }
    users:any;
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res)=>{
        this.users = res;
        //console.log(this.users)
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
