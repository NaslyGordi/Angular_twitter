import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateFollowerComponent } from './create-follower/create-follower.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';

const routes: Routes = [
  {   path: '', redirectTo: 'lista-Tweets', pathMatch: 'full'   },
  {   path: 'lista-Tweets', component: ListaTweetsComponent   },
  {   path: 'new-Tweets', component: CreateTweetComponent   },
  {   path: 'new-Followers', component: CreateFollowerComponent   },
  {   path: 'post', component: CreatePostComponent   },
  {   path: 'lista-posts', component: ListaPostsComponent   },
  {   path: '**', component: PageNotFoundComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }