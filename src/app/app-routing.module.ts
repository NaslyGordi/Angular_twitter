import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaTweetAutorComponent } from './lista-tweet-autor/lista-tweet-autor.component';
import { CreateFollowerComponent } from './create-follower/create-follower.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { LoginComponent } from './login/login.component';
import { ListaFollowersComponent } from './lista-followers/lista-followers.component';
import { ListaUsuarioIdComponent } from './lista-usuario-id/lista-usuario-id.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { ListaUsersComponent } from './lista-users/lista-users.component';




const routes: Routes = [
  {   path: 'login', component: LoginComponent },
  {   path: '', component: LoginComponent  },
  {   path: 'lista-Tweets', component: ListaTweetsComponent   },
  {   path: 'new-Tweets', component: CreateTweetComponent   },
  {   path: "lista-Tweets-Autor", component: ListaTweetAutorComponent },
  {   path: 'new-Followers', component: CreateFollowerComponent   },
  {   path: 'post', component: CreatePostComponent   },
  {   path: 'lista-posts', component: ListaPostsComponent   },
  {   path: 'lista-followers', component: ListaFollowersComponent   },
  {   path: "lista-Usuario-Id", component: ListaUsuarioIdComponent },
  {   path: "delete-usuario", component: DeleteUsuarioComponent},
  {   path: "All-users", component: ListaUsersComponent },
  {   path: '**', component: PageNotFoundComponent   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
