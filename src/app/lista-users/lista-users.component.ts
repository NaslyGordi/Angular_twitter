import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit {
  misUser;
  constructor(private UserService: UserService) { 
    this.getAllUsers();
  }
  ngOnInit(): void {
  }
  getAllUsers(){
    this.UserService.getAllUsers().subscribe(
      misUserObs => {
        this.misUser = misUserObs;
        }
    )
  }
}