import { Component, Input, Output, EventEmitter, AfterViewInit, Injectable } from '@angular/core';
import { Movie } from './Movie';
import { PostsService } from './PostsService';
import { UsersService } from './users.service';

@Component({
  selector: 'EditUserForm',
  templateUrl: './EditMovieForm.html'
})
@Injectable()
export class EditMovieFormComponent {
  @Input() booli: boolean = true;
  @Input() arEditTemp = new Movie("", "", 0);
  @Input() arItems: any;

  @Output() clickEdit = new EventEmitter<Movie>();

  submitHandler(myNgForm: any) {
    console.log("is form valid :" + myNgForm.valid);
    console.log(this.arEditTemp);
    this.clickEdit.emit(this.arEditTemp);
  }
  constructor(private serviceAjax: PostsService, private serviceUsers: UsersService) { }
}