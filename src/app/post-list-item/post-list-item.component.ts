import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIt += 1;
  }

  dontLoveIt() {
    this.loveIt -= 1;
  }
}
