import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  public searchPhotos(search: string): Observable<Photo[]> {
    return this.http.get<Photo[]>('');
  }
}
