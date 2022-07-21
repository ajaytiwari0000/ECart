import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  URL:any="https://jsonplaceholder.typicode.com/photos";
  photosData:any; 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
      console.log("Method called");
      this.http.get(this.URL)
      .subscribe(res=>{  
        console.log(res);
         this.photosData=res;
      })
   
  } 

}