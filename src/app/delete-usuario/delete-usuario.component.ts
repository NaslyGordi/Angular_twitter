import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {
  d;
  listUsers;
  constructor(private UserService: UserService) { 
    this.getAllUsers();
  }
  ngOnInit(): void {
  }



buscarUsuarioId(){
const { idUser } = this.d ;
const dato = this.listUsers.findOne({ where: { idUser: idUser }//Execute query
});
console.log("dato: " + dato);
}

getAllUsers(){
  this.UserService.getAllUsers().subscribe(
    listUserObs => {
      this.listUsers = listUserObs;
    }
  
    )
  }
  }



