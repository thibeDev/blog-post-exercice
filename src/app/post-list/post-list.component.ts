import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public postList = new Array<Post>();
  public postSubscription : Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe((postList: Post[]) => {
      this.postList = postList;
    });
    this.postService.emitPostSubject();
  }

}
