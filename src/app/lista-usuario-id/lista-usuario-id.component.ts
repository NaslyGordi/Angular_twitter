import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-usuario-id',
  templateUrl: './lista-usuario-id.component.html',
  styleUrls: ['./lista-usuario-id.component.css']
})

export class ListaUsuarioIdComponent implements OnInit {
  u;
  listUsers;
  id_search ;
  constructor(private UserService: UserService) { 
    this.getAllUsers();
  }
  ngOnInit(): void {
  }
  buscarUsuarioId(){
  const { idUser } = this.u ;
  const dato = this.listUsers.findOne({ where: { idUser: idUser }//Execute query
  });
  console.log("dato: " + dato);
  }
  getAllUsers(){
  this.UserService.getAllUsers().subscribe(
    listUserObs => {
      this.listUsers = listUserObs;
    }
  )}
  searchUserById(){
    if (this.id_search === undefined) {
      
    }else{ 
      this.UserService.searchUserById(this.id_search);
      this.id_search = "";
    }
  }
}

