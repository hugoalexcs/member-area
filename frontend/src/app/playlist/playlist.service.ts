import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    const url = `${this.apiUrl}/videos`;
    return this.http.get<Video[]>(url);
  }

}
