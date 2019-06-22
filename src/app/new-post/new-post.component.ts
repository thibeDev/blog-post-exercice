import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Post} from '../models/post.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public postForm: FormGroup;


  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: '',
      loveIt: ''
    })
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content']
    )
    this.postService.addPost(newPost);
    this.postService.emitPostSubject();
    this.router.navigateByUrl('posts');
  }
}
