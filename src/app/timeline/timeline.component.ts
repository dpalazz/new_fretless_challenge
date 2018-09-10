import { Component } from '@angular/core';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  public tweetList: Object;

  constructor(private configService: ConfigService) {
    this.getTweetListData();
  }

  getTweetListData() {
    this.configService.getConfig()
      .subscribe(data => {
        this.tweetList = data;
      });
  }

}
