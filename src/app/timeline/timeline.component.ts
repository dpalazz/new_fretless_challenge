import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public tweetList: any;

  constructor(private configService: ConfigService) {
    this.getTweetListData();
  }

  ngOnInit() { }

  getTweetListData() {
    this.configService.getConfig()
      .subscribe(data => {
        this.tweetList = data;
        console.log(data);

      });
  }

}
