import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {   path: '', redirectTo: '/lista-Tweets', pathMatch: 'full'   },
  {   path: 'lista-Tweets', component: ListaTweetsComponent   },
  {   path: 'new-Tweets', component: CreateTweetComponent   },
  {   path: '**', component: PageNotFoundComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
