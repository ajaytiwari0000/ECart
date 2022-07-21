import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   private URL="https://jsonplaceholder.typicode.com/posts";
   postData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getPosts():void{
     this.http.get(this.URL)
     .subscribe(res=>{
      console.log(res)
        this.postData=res;
     })
  }
}
