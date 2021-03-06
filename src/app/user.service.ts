import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ALL_USER: User[] = [
    {   idUser: 1,   username: "Julian",    creation_date: "2020-04-08"     },
    {   idUser: 2,   username: "Tatiana",   creation_date: "2020-04-09",    },
    {   idUser: 3,   username: "Nasly",     creation_date: "2020-04-10",    }
  ]
  constructor() { }
  getAllUsers() : Observable<User[]>{
   return of (this.ALL_USER);
  }
  createNewUser(newUser){    
    this.ALL_USER.push(newUser);
  }  
  deleteUserById(id_Eliminar){
    var index = this.ALL_USER.findIndex(function (usuario){
      return usuario.idUser === id_Eliminar ;
    })
    this.ALL_USER.splice(index,1);
  }

searchUserById(id_search){
  
}

}


