import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-lista-tweet-autor',
  templateUrl: './lista-tweet-autor.component.html',
  styleUrls: ['./lista-tweet-autor.component.css']
})
export class ListaTweetAutorComponent implements OnInit {
  misTweets;
  b;
  constructor(private TweetsService: TweetsService) { 
    this.getTweets();
  }
  ngOnInit(): void {
  }
  buscarTweetAutor(){
    const { autor } = this.b ;
    const dato = this.misTweets.findOne({ where: { autor: autor }//Execute query
    });
    console.log("dato: " + dato);
  }
  getTweets(){
    this.TweetsService.getAllTweets().subscribe(
      misTweetsObs => {
        this.misTweets = misTweetsObs;
      }
    )
  }
}

