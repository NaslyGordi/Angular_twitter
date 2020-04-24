import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-lista-tweet-autor',
  templateUrl: './lista-tweet-autor.component.html',
  styleUrls: ['./lista-tweet-autor.component.css']
})
export class ListaTweetAutorComponent implements OnInit {
  misTweets;
  buscar;
  miTweet: Tweet;
  constructor(private TweetsService: TweetsService) { 
    this.getTweets();
  }
  ngOnInit(): void {
  }
  buscarTweetAutor(){
    if(this.buscar === undefined){

    }
    else{
      for (let i = 0; i < this.misTweets.length; i++) {
        if(this.misTweets[i].autor === this.buscar){
          this.miTweet = new Tweet ;
          this.miTweet === this.misTweets[i];
          console.log("Cumple1",this.misTweets[i]);
          console.log("Cumple2",this.miTweet);
        }
      }
    }
    /*var index = this.misTweets.findIndex(function (usuario){
      return usuario.autor === this.buscar ;
    })
    console.log("dato: ", this.misTweets[index]);
    */
  }
  getTweets(){
    this.TweetsService.getAllTweets().subscribe(
      misTweetsObs => {
        this.misTweets = misTweetsObs;
      }
    )
  }
}