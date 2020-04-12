import { Injectable } from '@angular/core';
import { Follower } from './models/follower.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  ALL_FOLLOWERS: Follower[] = [

    {   idFollower: 1,   followername: "Cualquie cosa",   creation_date: "2020-04-10",   idUser: 2   },
    {   idFollower: 2,   followername: "Otra cosa",       creation_date: "2020-04-10",   idUser: 1   },
    {   idFollower: 3,   followername: "Nueva cosa",      creation_date: "2020-04-10",  idUser: 2   },
    {   idFollower: 4,   followername: "Diferente cosa",  creation_date: "2020-04-10",    idUser: 1   }
]
  constructor() {}
  getAllFollowers() : Observable<Follower[]>{
    return of (this.ALL_FOLLOWERS);
  }
  createNewFollower(nuevoFollower){    
    console.log("Que llega");
    console.log(nuevoFollower);
    
    this.ALL_FOLLOWERS.push(nuevoFollower);
  }
}