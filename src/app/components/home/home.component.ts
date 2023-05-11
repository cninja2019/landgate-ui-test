import { Component, OnInit } from '@angular/core';
import { VideoOverlayService } from 'src/app/services/video-overlay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private videoOverlayService: VideoOverlayService
  ) { }

  ngOnInit() {
  }

  openVideo() {
    this.videoOverlayService.show();
  }
}
