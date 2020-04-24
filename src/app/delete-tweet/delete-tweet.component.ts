import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';


@Component({
  selector: 'app-delete-tweet',
  templateUrl: './delete-tweet.component.html',
  styleUrls: ['./delete-tweet.component.css']
})
export class DeleteTweetComponent implements OnInit {
  listUsers;
  id_Eliminar ;

  constructor(private TweetsService: TweetsService) { 
  }
  ngOnInit(): void {
  }
  deleteTweetById(){
    if (this.id_Eliminar === undefined) {
      
    }else{
      this.TweetsService.deleteTweetById(this.id_Eliminar);
      this.id_Eliminar = "";
    }
  }

}





