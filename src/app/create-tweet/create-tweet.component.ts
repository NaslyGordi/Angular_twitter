import { Component, OnInit, NgModule } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {

  listaTweets = [];
  nuevoTweet: Tweet;
  
  constructor() { 
    this.nuevoTweet = new Tweet 
  }
  adicionarNuevoTweet (){
    this.listaTweets.push(this.nuevoTweet);
    this.nuevoTweet = new Tweet();
  }
  ngOnInit(): void {
  }
}