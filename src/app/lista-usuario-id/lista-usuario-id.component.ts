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
  constructor(private UserService: UserService) {  }
//this.getTweets();
  ngOnInit(): void {
  }



buscarUsuarioId(){
const { idUser } = this.u ;
const dato = this.listUsers.findOne({ where: { idUser: idUser }//Execute query
});
console.log("dato: " + dato);
}
/*
getTweets(){
this.UserService.getAllUser().subscribe(
  listUserObs => {
    this.listUsers = listUserObs;
  }
)
}
*/


}

