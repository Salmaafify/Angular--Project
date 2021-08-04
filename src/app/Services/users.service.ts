import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private myClient:HttpClient) { 
  }

  getAllUsers(){
    return this.myClient.get(this.baseUrl);
  }

  getUserById(id:number){
    return this.myClient.get(this.baseUrl+"/"+id);
  }

  addUser(user:any){
    return this.myClient.post(this.baseUrl,user);
  }

  updateUser(id:number,user:any){
    return this.myClient.put(this.baseUrl+"/"+id,user);
  }

  deleteUser(id:number){
    return this.myClient.delete(this.baseUrl+"/"+id);
  }
}
