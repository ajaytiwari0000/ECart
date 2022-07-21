import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { NoidaComponent } from './components/contact/noida/noida.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumComponent} from './components/album/album.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'contact',component:ContactComponent,children:[
    {path:'noida',component:NoidaComponent},
    {path:'delhi',component:DelhiComponent}
  ]},
  {path:'album',component:AlbumComponent},
  {path:'photos',component:PhotosComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
