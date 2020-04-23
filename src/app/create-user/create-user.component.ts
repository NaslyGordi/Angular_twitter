import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    newUser: User;
    allUser;
  constructor(private UserService: UserService) {
    this.newUser = new User;
   }
   NewUser (){
     this.UserService.createNewUser(this.NewUser);
     this.newUser = new User;
     this.getAllUser();
   }
  ngOnInit(): void {
  }
  getAllUser(){
    this.UserService.getAllUsers().subscribe(
      misFollowersObs => {
        this.allUser = misFollowersObs;
      }
    )
  }  
}    
 

