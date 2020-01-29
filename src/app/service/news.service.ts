import {Injectable, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements OnInit {

  constructor( public http: HttpClient) {
  }
  ngOnInit() {
  }

  getTopStories(){
    return this.http.get(`https://hacker-news.firebaseio.com/v0/topstories.json`);
  }
  getNews(id){
   return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }
}
