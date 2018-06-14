import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppComponent } from './app.component';
import { VideoThumbnailRendererComponent } from '../video-thumbnail-renderer/video-thumbnail-renderer.component';
import { AppService } from '../../services/app.service';
import { db } from '../../mock_backend/db';

describe('AppComponent', () => {
  let component: AppComponent;
  let appService: AppService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AgGridModule.forRoot(),
        UiSwitchModule
      ],
      declarations: [
        AppComponent,
        VideoThumbnailRendererComponent
      ],
      providers: [
        AppService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    appService = TestBed.get(AppService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('After transformData function, totalCount should be 2', () => {
    const data = db.items;
    const res = component.transformData(data);
    expect(component.totalCounts).toEqual(2);
  });

  it('After transformData function, response should be new format', () => {
    const data = db.items;
    const transformedData = component.transformData(data);
    expect(transformedData[0].videoId).toBeDefined();
    expect(transformedData[0].thumbnail).toBeDefined();
    expect(transformedData[0].publishedAt).toBeDefined();
    expect(transformedData[0].title).toBeDefined();
    expect(transformedData[0].description).toBeDefined();
  });
});
