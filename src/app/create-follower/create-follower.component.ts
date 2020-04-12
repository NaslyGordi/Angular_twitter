import { Component, OnInit } from '@angular/core';
import { Follower } from '../models/follower.model';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-create-follower',
  templateUrl: './create-follower.component.html',
  styleUrls: ['./create-follower.component.css']
})
export class CreateFollowerComponent implements OnInit {
  
  newFollower: Follower;
  misFollowers;
    
  constructor(private FollowersService: FollowersService) { 
    this.newFollower = new Follower ;  
  }
  NewFollower (){
    this.FollowersService.createNewFollower(this.newFollower);
    this.newFollower = new Follower;
    this.getAllFollowers();
  }
  ngOnInit(): void {
  }
  getAllFollowers(){
    this.FollowersService.getAllFollowers().subscribe(
      misFollowersObs => {
        this.misFollowers = misFollowersObs;
      }
    )
    //this.misTweets = this.TweetsService.getAllTweets();
  }

}