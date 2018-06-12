import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AppService
      ]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
