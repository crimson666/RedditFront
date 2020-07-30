import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { SubredditModel } from '../subreddit-model';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent implements OnInit {

  subreddits: Array<SubredditModel>;
  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }

}
