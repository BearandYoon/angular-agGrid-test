import { db } from './db';
import { of } from 'rxjs';

export class MockHttpClient {
  get(url) {
    return of(db);
  }
}
