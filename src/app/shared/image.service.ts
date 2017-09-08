import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class imageService {
    private query: string;
    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_API_URL;
    private URL: string = this.API_KEY = this.API_URL + '&q=';
    private perPage: string = '&per_page=10';

    constructor(private http: Http){}

    getImage(query){
        return this.http.get(this.URL + query + this.perPage).map(res => res.json());
    }

}