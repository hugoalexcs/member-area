import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Player from "video.js/dist/types/player";
import { VideoService } from '../core/services/video.service';
import videojs from 'video.js';
import '@videojs/http-streaming';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
 /* template: `
    <video
      #videoPlayer
      class="video-js vjs-default-skin vjs-16-9"
      controls
      preload="auto"
    >
      <source src="videoUrl" type="application/x-mpegURL" />
    </video>
  `,*/
  /*template: `
    <video #videoPlayer class="video-js"></video>
  `,*/
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit,AfterViewInit {
  //@ViewChild('videoPlayer') videoPlayer!: ElementRef;
  player: Player | undefined;
  videoUrl: any;

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef | undefined;
  isPlay: boolean = false;


  public videoJsConfigObj = {
    preload: "metadata",
    controls: true,
    autoplay: true,
    overrideNative: true,
    techOrder: ["html5", "flash"],
    html5: {
        nativeVideoTracks: false,
        nativeAudioTracks: false,
        nativeTextTracks: false,
        hls: {
            withCredentials: false,
            overrideNative: true,
            debug: true
        }
    }
};

  constructor(private videoService: VideoService) {}

  ngOnInit() {
   this.videoService.getStream().subscribe((blob: any) => {
      this.videoUrl = URL.createObjectURL(blob);
      console.log(this.videoUrl)
      //this.initializePlayer();
      //var player = videojs('my-video', this.videoJsConfigObj);
    });
   
  }
  toggleVideo(event?: any) {
    this.videoplayer?.nativeElement.play();
  }

  ngAfterViewInit() {
    /*const videoUrl = 'http://localhost:3000/stream/test.mp4'; // altere para a URL do seu servidor de mídia
    const options = {}; // coloque aqui as opções de configuração do Video.js
    const player = videojs(this.videoPlayer.nativeElement, options);

    player.src({
      src: videoUrl,
      type: 'application/x-mpegURL'
    });

    videojs(this.videoPlayer.nativeElement);*/
    //var player = videojs('my-video', this.videoJsConfigObj);
  }

  initializePlayer() {
    this.player = videojs('#videoPlayer', {
      fluid: true,
    });
  }
}
