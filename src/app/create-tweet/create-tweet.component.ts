import { Component, OnInit, NgModule } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css'],
})
export class CreateTweetComponent implements OnInit {
  listaTweets = [];
  nuevoTweet: Tweet;
  n = "1";
  constructor(private TweetsService: TweetsService) { 
    this.nuevoTweet = new Tweet; 
  }
  adicionarNuevoTweet (){
    console.log("validación");
    const a = this.nuevoTweet = {
      id: 1,
      texto: this.nuevoTweet.texto, 
      autor: this.nuevoTweet.autor,
      fecha: this.nuevoTweet.fecha
    };
    console.log(a);
    this.TweetsService.createNewTweet(this.nuevoTweet);
  }
  ngOnInit(): void {
  }

}