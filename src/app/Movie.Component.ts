import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './Movie';
import { PostsService } from './PostsService';
import { UsersService } from './users.service';


@Component({
    selector: 'Movie',
    templateUrl: './Movie.component.html',
})

export class MovieComponent {

    @Input() arItems: any;
    @Input() AddMovieFormbolli: boolean = false;
    @Input() EditMovieFormbolli: boolean = false;
    @Input() MovieBooli: boolean = true;

    @Input() remove: boolean = true;

    submitHandler(myNgForm: any) {
        console.log(myNgForm);
        console.log(myNgForm.valid);
    }

    onClickHandler($event: Movie) {
        this.EditMovieFormbolli = false;
        console.log("event:", $event);
        const req = this.serviceAjax.Post($event);
        req.subscribe(posts => {
            this.arItems.push($event);
            this.AddMovieFormbolli = false;
        },
            (err) => {
                this.AddMovieFormbolli = false;
                console.log("error : " + err);
            });
    }
    tempItem: any;
    getItem(item: Movie) {
        this.tempItem = item;
        this.EditMovieFormbolli = true
    }

    showUsers() {
        let req = this.serviceAjax.Get();
        req.subscribe(rsp => {
            this.arItems = rsp.json();
            console.log(this.arItems);
        });
    }
    deleteClick(item: Movie) {
        this.arItems.splice(this.arItems.indexOf(item), 1);
        this.serviceUsers.removeItem(item);
    }

    buttonTrue() {
        this.remove = true;
    }
    clickHandler(num: any, boolii: boolean) {
        console.log("1:" + boolii);
        if (boolii) {
            console.log(num);
            console.log(this.arItems.indexOf(num));
            this.arItems.splice(this.arItems.indexOf(num), 1);
            console.log("1:" + boolii);
        }
        boolii = false;
        console.log("2:" + boolii);
    }
    constructor(private serviceAjax: PostsService, private serviceUsers: UsersService) { }
}


