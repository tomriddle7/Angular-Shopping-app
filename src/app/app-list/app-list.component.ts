import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

interface Result {
  feed: object;
}

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  upcomingApps : any;
  upcomingGames : any;

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/10/explicit.json`)
      .subscribe((appdata:Result) => {
        this.upcomingApps = appdata.feed;
        //console.log(this.upcomingApps);
    });
    this.http
      .get<Result>(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/10/explicit.json`)
      .subscribe((appdata:Result) => {
        this.upcomingGames = appdata.feed;
        //console.log(this.upcomingGames);
    });
  }
  iTune(url) {
    window.open(url, '_blank');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/