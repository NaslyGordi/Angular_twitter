import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';


@Component({
  selector: 'app-lista-followers',
  templateUrl: './lista-followers.component.html',
  styleUrls: ['./lista-followers.component.css']
})
export class ListaFollowersComponent implements OnInit {
  misFollowers;
  constructor(private FollowersService: FollowersService) {
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
  }
}

