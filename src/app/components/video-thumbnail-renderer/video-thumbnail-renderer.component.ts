import { Component, OnInit } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-video-thumbnail-renderer',
  templateUrl: './video-thumbnail-renderer.component.html',
  styleUrls: ['./video-thumbnail-renderer.component.scss']
})
export class VideoThumbnailRendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  imageUrl = '';
  videoId = '';

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.params = params;
    this.imageUrl = params.data.thumbnail;
    this.videoId = params.data.videoId;
  }

  refresh(): boolean {
    return false;
  }

  showVideo() {
    console.log(this.videoId);
    const videoUrl = `https://www.youtube.com/watch?v=${this.videoId}`;
    window.open(videoUrl, '_blank');
  }
}
