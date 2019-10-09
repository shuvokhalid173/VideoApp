import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  public videoModel = {
    title : '',
    url : '',
    description: ''
  }

  public videos : any ;
  // videos: Video[] = [
  //   {"_id": "1", "title": "title1", "url": "url1", "description": "des1"},
  //   {"_id": "2", "title": "title2", "url": "url2", "description": "des2"},
  //   {"_id": "3", "title": "title3", "url": "url3", "description": "des3"},
  //   {"_id": "4", "title": "title4", "url": "url4", "description": "des4"}
  // ];
  constructor(private videoService : VideoService, private router : Router) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  public selectedVideo : Video;

  onSelectVideo(video) {
    this.selectedVideo = video;
    this.addButtonClicked = false;
    console.log(video);
  }

  addButtonClicked = false;

  onClickOfAddVideo() {
    this.addButtonClicked = true;
    this.selectedVideo = null;
  }

  onSubmitForm(videoModel) {
    this.videoService.addVideo(videoModel).subscribe((data) => {
      this.videos.push(data);
      this.addButtonClicked = false;
      this.selectedVideo = <Video>data;
    });
    console.log(videoModel);
  }

  deleteVideo(video) {
    const index = this.videos.indexOf(video);
    this.videos.splice(index, 1);
    this.selectedVideo = null;
  }
}
