import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';


@Component({
  selector: 'app-lista-followers',
  templateUrl: './lista-followers.component.html',
  styleUrls: ['./lista-followers.component.css']
})
export class ListaFollowersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//////////////////////////////////////////7
/*

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  misPosts;
  constructor(private PostsService: PostsService) {
    this.getAllPosts();
  }
  ngOnInit(): void {
  }
  getAllPosts(){
    this.PostsService.getAllPosts().subscribe(
        misPostsObs => {
          this.misPosts = misPostsObs;
        }
      )
  }    
}

/////////////////////////////////////////////////////




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

*/