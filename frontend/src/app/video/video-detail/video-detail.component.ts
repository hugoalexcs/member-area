import { Component } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {
  videoId: string;
  video: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

}
