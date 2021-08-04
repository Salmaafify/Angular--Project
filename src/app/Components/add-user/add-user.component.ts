import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  constructor(private myService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  addUser(name:any,email:any,phone:any,desc:any){
    let user = {
      name:name,
      email:email,
      PhoneNumber:phone,
      description:desc,
      imageSrc: "assets/Images/p6.jpg"
    }
    this.myService.addUser(user).subscribe();
    setTimeout(()=>{
      this.router.navigateByUrl("/users")
    },2000);
    
  }
}
