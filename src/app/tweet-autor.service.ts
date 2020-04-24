import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetAutorService {
  ALL_TWEETS: Tweet[] = [
    {   id: 1,   texto: "Cualquie cosa",   autor: "@Julian",   fecha: "11Abr"   },
]
constructor( ) { }
getAllTweets() : Observable<Tweet[]>{
  return of (this.ALL_TWEETS);
}
buscarTweetAutor(buscar){
  var index = this.ALL_TWEETS.findIndex(function (tweet){
    return tweet.autor === buscar ;
  })

}

}
