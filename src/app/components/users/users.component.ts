import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   URL:any="https://jsonplaceholder.typicode.com/users";
   usersData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
       this.http.get(this.URL)
       .subscribe(res=>{
        console.log(res);
        this.usersData=res;
       })
  }

}
