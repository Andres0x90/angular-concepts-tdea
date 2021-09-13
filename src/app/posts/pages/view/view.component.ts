import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private postService: PostService) { }
  posts:any = [];

  ngOnInit(): void {
    this.requestPosts();
  }

  requestPosts():void
  {
      this.postService.getPosts().subscribe(
        (response => this.posts = response)
      );
  }
}
