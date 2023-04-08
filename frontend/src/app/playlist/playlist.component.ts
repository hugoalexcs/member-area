import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  videos: Video[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

}
