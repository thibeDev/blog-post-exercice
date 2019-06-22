import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post.model';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public postsSubject = new Subject<Post[]>()

  public postList;

  constructor() {
    this.postList = new Array<Post>();
    for (let i = 1; i <= 3; i ++ ) {
      this.postList.push(new Post('Titre' + i, 'Contenu' + i));
    }
  }

  public emitPostSubject() {
    this.postsSubject.next(this.postList.slice());
  }

  public addPost(post: Post){
    this.postList.push(post);
    this.emitPostSubject();
  }

  public removePost(index){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.postList.splice(index, 1);
        this.emitPostSubject();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  onLoveIt(index) {
   this.postList[index].loveIt ++;
   this.emitPostSubject();
  }

  dontLoveIt(index) {
    this.postList[index].loveIt --;
    this.emitPostSubject();
  }
}
