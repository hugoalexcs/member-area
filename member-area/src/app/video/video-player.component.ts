import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import videojs, { type VideoJsPlayer, type VideoJsPlayerOptions } from 'video.js'

@Component({
  selector: 'app-video-player',
  template: `
    <video #videoPlayer class="video-js"></video>
  `,
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef;
  @Input() videoUrl!: string;

  ngOnInit() {
    const videoPlayer = videojs(this.videoPlayerRef.nativeElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      responsive: true,
      sources: [
        {
          src: this.videoUrl,
          type: 'video/mp4',
        },
      ],
    });

    // Adiciona o plugin de adaptação de taxa de bits ao player de vídeo
    videoPlayer.qualityPickerPlugin({
      defaultQuality: 480,
      qualities: [
        {
          name: '360p',
          value: 'https://example.com/360p.mp4',
        },
        {
          name: '480p',
          value: 'https://example.com/480p.mp4',
        },
        {
          name: '720p',
          value: 'https://example.com/720p.mp4',
        },
        {
          name: '1080p',
          value: 'https://example.com/1080p.mp4',
        },
      ],
    });
  }
}
