import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoidaComponent } from './components/contact/noida/noida.component';
import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    NoidaComponent,
    DelhiComponent,
    NotfoundComponent,
    PostsComponent,
    UsersComponent,
    AlbumComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],// load modules
  providers: [], // services 
  bootstrap: [AppComponent]
})
export class AppModule { }
