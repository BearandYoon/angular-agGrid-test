import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppService } from './app.service';
import { MockHttpClient } from '../mock_backend/mock-http-client';

describe('AppService', () => {
  let serviceInstance: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AppService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
  });

  beforeEach(async() => {
    serviceInstance = TestBed.get(AppService);
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('getGridData api should get video list as observable array, and first videoId should be 3fumBcKC6RE', (done: DoneFn) => {
    serviceInstance.getGridData().subscribe((res: Array<any>) => {
      expect(res.length).toEqual(2);
      expect(res[0].id.videoId).toEqual('3fumBcKC6RE');
      done();
    });
  });
});
