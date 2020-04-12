import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { CreateFollowerComponent } from './create-follower/create-follower.component';
import { MatInputModule } from '@angular/material/input';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ListaTweetsComponent,
    CreateTweetComponent,
    PageNotFoundComponent,
    CreateFollowerComponent,
    CreatePostComponent,
    ListaPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
