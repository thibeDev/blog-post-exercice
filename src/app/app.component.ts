import { Component } from '@angular/core';
import {Post} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  postList = new Array<Post>();

  constructor() {
    for (let i = 1; i <= 3; i ++ ) {
    this.postList.push(new Post('Titre' + i, 'Contenu' + i));
    }
  }
}

