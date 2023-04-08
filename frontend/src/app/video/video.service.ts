import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private streamUrl = 'http://localhost:8000/stream';

  constructor(private http: HttpClient) {}

  getStream() {
    return this.http.get(this.streamUrl, { responseType: 'blob' });
  }
}
