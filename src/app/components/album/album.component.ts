import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  URL:any="https://jsonplaceholder.typicode.com/albums";
  albumData:any; 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
      console.log("Method called");
      this.http.get(this.URL)
      .subscribe(res=>{ 
        console.log(res);
         this.albumData=res;
      })
   
  }

  

}
