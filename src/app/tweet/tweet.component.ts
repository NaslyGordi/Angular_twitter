import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { ListaTweetsComponent } from '../lista-tweets/lista-tweets.component';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  displayedColumns: string[] = ['texto', 'autor', 'fecha'];
  dataSource = ListaTweetsComponent;
  
  
  nuevoTweet: Tweet;
  listaTweets = [];  
  constructor() { 
    this.nuevoTweet = new Tweet();  
  }
  adicionarNuevoTweet(){
    this.listaTweets.push(this.nuevoTweet);
    this.nuevoTweet = new Tweet();
  }  
  ngOnInit(): void {
  }
    
}