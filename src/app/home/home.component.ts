import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { GiphiaLogoService} from 'src/app/services/giphia-logo.service';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private router: Router,
              private _location: Location,
              public data: DataService,
              private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    })
  }

  leaderboardRoute(){
    this.router.navigateByUrl('/leaderboard');
  };

  playGameRoute(){
    this.router.navigateByUrl('/gamemodes');
  };

  playerStats(){
     this.firebaseService.user.subscribe(userData => {
      this.firebaseService.fetchUserProfile(userData.id);
    })
    this.router.navigate(['/player-profile', "https://avatars.dicebear.com/api/bottts/example.svg?colors%5B%5D=purple"]);
  }

  backClick(){
    this._location.back();
  }

}

