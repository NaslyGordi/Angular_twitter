import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  ALL_TWEETS: Tweet[] = [
    {   id: 1,   texto: "Cualquier cosa",   autor: "@Julian",   fecha: "11Abr"   },
    {   id: 2,   texto: "Otra cosa",   autor: "@Tatta",   fecha: "20Abr"   },
    {   id: 3,   texto: "Cualquier cosa2",   autor: "@Julian",   fecha: "24Abr"   },
    {   id: 4,   texto: "Otra cosa2",   autor: "@Tatta",   fecha: "12Abr"   },
    {   id: 5,   texto: "Cualquier cosa3",   autor: "@Julian",   fecha: "31Abr"   },
    {   id: 6,   texto: "Otra cosa3",   autor: "@Nat",   fecha: "26Abr"   },
]
  constructor( ) { }
  getAllTweets() : Observable<Tweet[]>{
    return of (this.ALL_TWEETS);
  }
  createNewTweet(nuevoTweet){ 
    console.log(nuevoTweet);
    this.ALL_TWEETS.push(nuevoTweet);
  }
  deleteTweetById(id_Eliminar){
    var index = this.ALL_TWEETS.findIndex(function (tweet){
      return tweet.id === id_Eliminar ;
    })
    this.ALL_TWEETS.splice(index,1);
  }

}
