import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumbnailRendererComponent } from './video-thumbnail-renderer.component';

describe('VideoTitleRendererComponent', () => {
  let component: VideoThumbnailRendererComponent;
  let fixture: ComponentFixture<VideoThumbnailRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoThumbnailRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
