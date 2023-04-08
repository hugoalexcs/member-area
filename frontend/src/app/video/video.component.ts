import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  template: `
    <video
      #videoPlayer
      class="video-js vjs-default-skin vjs-16-9"
      controls
      preload="auto"
    >
      <source [src]="videoUrl" type="application/x-mpegURL" />
    </video>
  `,
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  private player: videojs.Player;
  videoUrl: string;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getStream().subscribe((blob) => {
      this.videoUrl = URL.createObjectURL(blob);
      this.initializePlayer();
    });
  }

  initializePlayer() {
    this.player = videojs('#videoPlayer', {
      fluid: true,
    });
  }
}
