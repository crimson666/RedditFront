import { Injectable } from '@angular/core';
import { VotePayload } from './vote-button/vote-payload';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  vote(votePayload: VotePayload) {
    return this.http.post('http://localhost:8080/api/votes/', votePayload);
  }

  constructor(private http: HttpClient) { }
}
