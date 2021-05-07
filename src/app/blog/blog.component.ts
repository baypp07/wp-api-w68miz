import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 posts$: Observable<any[]>;

  constructor( private postService: PostsService) { }

 

ngOnInit() {
  this.posts$ = this.postService.getPosts();
  console.log(this.posts$)
  }
  

  }