import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  ALL_TWEETS: Tweet[] = [
    {   id: 1,   texto: "Cualquie cosa",   autor: "@Julian",   fecha: "11Abr"   },
    {   id: 2,   texto: "Otra cosa",       autor: "Andres",   fecha: "2020-04-05"   }
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
