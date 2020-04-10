import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.css']
})
export class ListaTweetsComponent implements OnInit {
  misTweets;
  constructor(private TweetsService: TweetsService) {
    this.getTweets();
  }
  ngOnInit(): void {
  }
  getTweets(){
    this.TweetsService.getAllTweets().subscribe(
      misTweetsObs => {
        this.misTweets = misTweetsObs;
      }
    )
    //this.misTweets = this.TweetsService.getAllTweets();
  }
}