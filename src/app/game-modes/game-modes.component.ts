import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { faSync} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-modes',
  templateUrl: './game-modes.component.html',
  styleUrls: ['./game-modes.component.css']
})
export class GameModesComponent implements OnInit {
  faSync = faSync;

  constructor(private router: Router, public data: DataService) { }

  numberOfGamesPlayed: number = 0;


  playCount(){
    this.numberOfGamesPlayed += 1;
  }

  endlessTriviaGame(){
    this.router.navigateByUrl('/endless-trivia');
  };

  timeChallengeGame(){
    this.router.navigateByUrl('/time-challenge');
  };

  ngOnInit(): void {
  }

}
