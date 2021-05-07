import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
// Added the Router Module
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { PostsService } from './posts.service';



// Add Routes
  const routes: Routes = [
     { path: '', component: BlogComponent },
     { path: 'blog/:blogId', component: BlogDetailsComponent }
  ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, BlogComponent, BlogDetailsComponent],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule],
  providers: [PostsService],
 
})



export class AppModule { }
