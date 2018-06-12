import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import 'ag-grid-enterprise';

import { AppService } from '../../services/app.service';
import { AgGridDTO } from '../../interfaces/ag-grid-data-dto';
import { VideoThumbnailRendererComponent } from '../video-thumbnail-renderer/video-thumbnail-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  gridData: Observable<AgGridDTO[]>;
  totalCounts = 0;
  selectedCounts = 0;
  selectionMode = false;

  gridApi;
  gridColumnApi;
  columnDefs;
  context;
  frameworkComponents;

  constructor(private appService: AppService) {
    this.columnDefs = [
      {
        headerName: '',
        field: 'thumbnail',
        cellRenderer: 'videoThumbnailRenderer',
        colId: 'params',
        suppressSizeToFit: true,
        autoHeight: true
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        suppressSizeToFit: true
      },
      {
        headerName: 'Video Title',
        field: 'title'
      },
      {
        headerName: 'Description',
        field: 'description'
      }
    ];

    this.context = { componentParent: this };
    this.frameworkComponents = {
      videoThumbnailRenderer: VideoThumbnailRendererComponent
    };
  }

  ngOnInit() {
    this.gridData = this.appService.getGridData()
      .pipe(map(item => this.transformData(item)));
  }

  transformData(data: any[]) {
    this.totalCounts = data.length;
    return data.map(item => {
      return {
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.default.url,
        publishedAt: new Date(item.snippet.publishedAt).toDateString(),
        title: item.snippet.title,
        description: item.snippet.description
      };
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  onChangeSelectionMode(event) {
    if (event) {
      this.columnDefs.splice(0, 0, {
        headerName: '',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        width: 44
      });
    } else {
      this.columnDefs.splice(0, 1);
    }

    this.gridApi.setColumnDefs(this.columnDefs);
    this.gridApi.sizeColumnsToFit();
  }

  getSelectedRows(event) {
    this.selectedCounts = this.gridApi.getSelectedRows().length;
  }

  getContextMenuItems(params) {
    const result = [
      {
        name: 'Open in new tab',
        action: function() {
          window.open(`https://www.youtube.com/watch?v=${params.node.data.videoId}`, '_blank');
          }
      },
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    return result;
  }
}
