import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()

export class PostsService {
    private url: string;
    urlString: string;
    PostUrl: string;
    Get() {
        return this.http.get(this.url);
    }
    Post(body: any) {
        return this.http.post(this.PostUrl, body)
    }
    Put(body: any) {
        let tempUrl = this.PostUrl + body.id;
        console.log(tempUrl);
        return this.http.put(tempUrl, body)
    }
    constructor(private http: Http) {
        this.url = "http://localhost:62830/Movie/";
        this.PostUrl = "http://localhost:62830/Movie/posts";

    }
}