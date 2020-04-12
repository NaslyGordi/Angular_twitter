import { Component, OnInit, NgModule } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {
  listaTweets = [];
  nuevoTweet: Tweet;

  constructor(private TweetsService: TweetsService) { 
    this.nuevoTweet = new Tweet; 
    //console.log("Lista: ",this.listaTweets);
  }
  adicionarNuevoTweet (){
    console.log("validación");
    console.log(this.nuevoTweet);
    this.TweetsService.createNewTweet(this.nuevoTweet);
    //this.listaTweets.push(this.nuevoTweet);
    //this.nuevoTweet = new Tweet();
  }
  ngOnInit(): void {
  }

}
