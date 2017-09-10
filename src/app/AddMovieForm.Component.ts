import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from './PostsService';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable()
@Component({
  selector: 'AddMovieForm',
  templateUrl: './AddMovieForm.html'

})

export class AddMovieFormComponent {

  @Output() arMovieTemp = new Movie("", "",0);
  @Input() arItems: any;
  @Input() arEditTemp = new UsersService();
  
  @Output() onClick = new EventEmitter<Movie>();
     submitHandler(myNgForm: any) {
        console.log(myNgForm.value);
        this.onClick.emit(this.arMovieTemp);
    }
  constructor(private serviceAjax: PostsService, private serviceUsers: UsersService) { }
}