import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService{
    constructor(private http: Http) {
        console.log('postService Initialized...');
    }
    // There is an import function to read data stored in CSV format: s
    getPost() {
        return this.http.get('https://api.myjson.com/bins/zxa4j')
        .map(res => res.json());
    }
}