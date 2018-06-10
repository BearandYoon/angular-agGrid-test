import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppComponent } from './components/app/app.component';
import { AppService } from './services/app.service';
import { VideoThumbnailRendererComponent } from './components/video-thumbnail-renderer/video-thumbnail-renderer.component';

@NgModule({
  declarations: [AppComponent, VideoThumbnailRendererComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([VideoThumbnailRendererComponent]),
    UiSwitchModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
