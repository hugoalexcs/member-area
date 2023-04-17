import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

//https://stackblitz.com/edit/ngx-plyr-7jxrjs?file=src%2Fapp%2Fapp.component.ts
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
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
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent  {

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent | undefined;
 //@ViewChild(PlyrComponent) plyr: PlyrComponent ;

 // or get it from plyrInit event
 player: Plyr | undefined;
 controls: any = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
    </button>
    <div class="plyr__progress" style="width:80%;">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    <button (click)="openRepeatSection()" type="button" class="plyr__control">
        <img width="16px" src="/assets/icon/repeat.svg"/>
        <span role="tooltip" class="plyr__tooltip">Repeat Section</span>
    </button>
    <button (click)="openAudioChoices()" id="openAudio" type="button" class="plyr__control"data-plyr="openAudio">
        <span>Audio</span>
    </button>
    <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
    </button>
    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
    <button type="button" class="plyr__control" data-plyr="fullscreen" style="display:block">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
    </button>
</div>
`;
 optionsPlay: Plyr.Options = {
  controls: this.controls,
  muted: true,
  clickToPlay: false,
  displayDuration: true,
  volume: 0,
}



 videoSources: Plyr.Source[] = [
  {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    type: 'video/mp4',
    size: 720,
  },
]

 played(event: any) {
   console.log('played', event);
 }

 play($event?: any): void {
   this.player?.play(); // or this.plyr.player.play()
 }

 stop($event?: any): void {
   this.player?.stop(); // or this.plyr.player.play()
 }

}
