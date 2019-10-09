import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ['video'],
  outputs: ['deleteVideoEvent']
})
export class VideoDetailsComponent implements OnInit {

  public deleteVideoEvent = new EventEmitter(); 

  constructor(private videoService : VideoService) { }

  ngOnInit() {
  }

  onSubmitForm(video : Video){
    this.videoService.updateVideo(video).subscribe((data) => {
      video = <Video>data;
    });
  }

  deleteVideo(video : Video) {
    this.videoService.deleteVideo(video).subscribe((data) => {
      // here data should be send to video center component to splice the data from the videos array 
      console.log('deleted : ' + data);     
      this.deleteVideoEvent.emit(video);
    })
  }
}
