import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent implements OnInit {
  id:number = 0;
  constructor(private myService:UsersService,private myActivated:ActivatedRoute,private router:Router) { 
    this.id = myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
  }
  updateUser(name:any,email:any,phone:any,desc:any){
    let user = {
      name:name,
      email:email,
      PhoneNumber:phone,
      description:desc,
      imageSrc: "assets/Images/p8.jpg"
    }
    this.myService.updateUser(this.id,user).subscribe();

    setTimeout(()=>{
      this.router.navigateByUrl("/users")
    },2000);
  }

}
