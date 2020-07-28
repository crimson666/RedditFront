import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubredditModel } from './subreddit-model';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  createSubreddit(subredditModel: SubredditModel) {
    return this.http.post('http://localhost:8080/api/subredit',
      subredditModel);
  }
  getAllSubreddits() {
    return this.http.get<Array<SubredditModel>>('http://localhost:8080/api/subredit');
  }

  constructor(private http: HttpClient) {
   }
}
