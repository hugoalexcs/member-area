import { Component } from '@angular/core';
import { HlsjsPlyrDriver } from './hlsjs-plyr-driver';
import Plyr from 'plyr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PlayerComponent {
  name = 'Angular';

  player: Plyr;
  hlsDriver: HlsjsPlyrDriver = new HlsjsPlyrDriver(false);

  options: Plyr.Options = {
    autoplay: true,
    invertTime: false,
    disableContextMenu: true,
    settings: ['quality', 'speed', 'loop'],
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'settings',
      'fullscreen'
    ],
    captions: { active: true, update: true, language: 'en' }
  };

  poster = 'https://bitdash-a.akamaihd.net/content/sintel/poster.png';
  sources: Plyr.Source[] = [
    {
      src:
        'https://d18z7qd4lgwjkx.cloudfront.net/out/v1/5c3c5578207f4deda32a801106c0a37c/index.m3u8',
      type: 'video'
    }
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);

    this.hlsDriver.load(this.sources[0].src);
  }
}
