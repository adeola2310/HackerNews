import { Component, OnInit } from '@angular/core';
import { NewsService} from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any = [];

  constructor(private newsService: NewsService){
    this.newsService.getTopStories()
      .subscribe((newsIds) => {
        for(let i= 0; i < 30; i++){
          this.newsService.getNews(newsIds[i]).subscribe(newsItem => this.news.push(newsItem));
        }

      });

  }

  ngOnInit() {
  }

  //  getHostName(url){
  //   return this.url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)[2];
  // }

}
