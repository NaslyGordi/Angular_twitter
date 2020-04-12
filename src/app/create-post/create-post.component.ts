import { Component, OnInit } from '@angular/core';
import { Post } from  '../models/post.model' ;
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  newPost : Post ;
 
  constructor(private PostsService: PostsService) {
    this.newPost = new Post ;
  }
  NewPost (){
    this.PostsService.createNewPost(this.newPost);
    this.newPost = new Post;
  }
   ngOnInit(): void {
  }
}