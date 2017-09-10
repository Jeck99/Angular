import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'Posts',
    template: `

<div class="container">
<i *ngIf="arItems==null" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
<div class="table-responsive" *ngIf="arItems!=null">
<h1> Posts</h1>
 <table class="table table-hover">
    <tbody>
       <tr *ngFor="let item of arItems">
       {{item.name}}
       </tr>
     </tbody>
  </table>
</div>
</div>
`
})

export class PostsComponent {
    @Input() loading: boolean;
    arItems: any;
    ngAfterViewInit() {
        let req = this.http.get("http://localhost:62830/Movie");
        req.subscribe(rsp => {
            this.arItems = rsp.json();
            console.log(this.arItems);
        });
    }
    constructor(private http: Http) { };
}
