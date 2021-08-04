import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'tr[app-user-item]',
  templateUrl: './user-item.component.html',
  styles: [
  ]
})
export class UserItemComponent implements OnInit {
  constructor(private myService:UsersService,private router:Router) { }
  ngOnInit(): void {

  }
  @Input() user:any;
  deleteUser(){
    let confrm = confirm("Do You Sure Of Deleting This User");
    if(confrm){
      this.myService.deleteUser(this.user.id).subscribe(); 
      window.location.reload();
    }
   }
  }

