import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() createdAt: Date;
  @Input() index;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.onLoveIt(this.index);
  }

  dontLoveIt() {
    this.postService.dontLoveIt(this.index);
  }

  onDelete(index) {
    this.postService.removePost(index);
  }
}
