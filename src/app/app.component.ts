import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Neosoft Tecnologies';
  courses:any=[];
  imgUrl="https://picsum.photos/200/300";
  empData=[
    {"id":1,"name":"A","age":23,"city":"noida"},
    {"id":2,"name":"B","age":33,"city":"delhi"},
    {"id":3,"name":"C","age":43,"city":"noida"},
    {"id":4,"name":"D","age":53,"city":"delhi"},
    {"id":5,"name":"E","age":63,"city":"noida"},
  ]
  abc(){
    alert("Hello")
    this.courses=["php",".net","java","python"];
    this.imgUrl="https://www.dummytextimages.com/600x400/000/fff"
  }
}
