import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <iframe
      [src]="videoLink"
      width="100%" height="100%"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
  `]
})
export class VideoComponent implements OnInit {

  public videoLink: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/6bQCY24G62w`)
  }

}
