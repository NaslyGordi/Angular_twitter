import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  ALL_POST: Post[] = [

    {   idPost: 1,   message: "Nuevo Mensaje",      published_date: "2020-04-10",   idUser: 2   },
    {   idPost: 2,   message: "Mensaje de Prueba",  published_date: "2020-04-10",   idUser: 1   },
    {   idPost: 3,   message: "Guardar Mensaje",    published_date: "2020-04-10",   idUser: 2   },
    {   idPost: 4,   message: "Diferente Mensaje",  published_date: "2020-04-10",   idUser: 1   }
]
  constructor() { }
  getAllPosts() : Observable<Post[]>{
    return of (this.ALL_POST);
  }
  createNewPost(newPost){    
    this.ALL_POST.push(newPost);
  }
  
}

  
  