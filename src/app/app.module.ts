import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CommonModule }   from '@angular/common';

import { notFoundComponent } from './notFound.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'
import { MovieComponent } from './Movie.Component';
import { PostsComponent } from './Posts.Component';
import { EditMovieFormComponent } from './EditMovieForm.Component';
import { AddMovieFormComponent } from './AddMovieForm.Component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { PostsService } from './PostsService';

const appRoutes: Routes = [


      { path: 'Users', component: MovieComponent },
      { path: 'Posts', component: PostsComponent },
      { path: 'EditUserForm', component: EditMovieFormComponent },
      { path: 'AddUserForm', component: AddMovieFormComponent },
      { path: 'Home', component: HomeComponent },
      { path: '404', component: notFoundComponent },
      { path: '**', redirectTo: '/404' }

];
const UsersRoutes: Routes = [
      { path: 'EditUserForm', component: EditMovieFormComponent },
      { path: 'AddUserForm', component: AddMovieFormComponent },
      { path: '404', component: notFoundComponent },
      { path: '**', redirectTo: '/404' }

];
@NgModule({
      imports: [BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule,CommonModule], 
      declarations: [AppComponent, HomeComponent,
       notFoundComponent, MovieComponent,
       PostsComponent,EditMovieFormComponent,AddMovieFormComponent],

      bootstrap: [AppComponent],
      providers:[UsersService,PostsService]
})
export class AppModule { }