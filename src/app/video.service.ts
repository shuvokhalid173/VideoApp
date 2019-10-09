import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  getVideos() {
    return this.http.get('/api/videos');
  }

  addVideo(video) {
    return this.http.post('/api/videos', video);
  }

  updateVideo(video) {
    return this.http.put('/api/videos/' + video._id, video);
  }

  deleteVideo(video) {
    return this.http.delete('/api/videos/' + video._id);
  }
}
