import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsService} from './service/news.service';
import { DatePipe } from './pipe/date.pipe';
import { UrlPipe } from './pipe/url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatePipe,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
