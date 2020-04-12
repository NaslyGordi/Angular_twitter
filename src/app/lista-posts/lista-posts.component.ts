import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

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