import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

 posts$: Observable<any[]>;
 post;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
// Go to single blog post ?????
   this.route.paramMap.subscribe(params => {
    this.post = this.posts$[+params.get('blogId')];
    });
  }

}