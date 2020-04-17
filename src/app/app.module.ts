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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListaTweetAutorComponent } from './lista-tweet-autor/lista-tweet-autor.component';
import { MatMenuModule } from '@angular/material/menu';
import { CreateFollowerComponent } from './create-follower/create-follower.component';
import { MatInputModule } from '@angular/material/input';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListaFollowersComponent } from './lista-followers/lista-followers.component';
import { ListaUsuarioIdComponent } from './lista-usuario-id/lista-usuario-id.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ListaTweetsComponent,
    CreateTweetComponent,
    PageNotFoundComponent,
    ListaTweetAutorComponent,
    CreateFollowerComponent,
    CreatePostComponent,
    ListaPostsComponent,
    LoginComponent,
    MenuComponent,
    ListaFollowersComponent,
    ListaUsuarioIdComponent
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatMenuModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
