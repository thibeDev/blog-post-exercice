import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {NewPostComponent} from './new-post/new-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'new-post', component: NewPostComponent},
  {path: 'posts', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
