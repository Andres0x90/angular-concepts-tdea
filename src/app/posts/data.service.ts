import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ViewComponent } from './pages/view/view.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpRequest: HttpClient) { }
  
  public getPosts():Observable<any>
  {
      let url: string = "https://jsonplaceholder.typicode.com/posts";
      return this.httpRequest.get(url);
  }
}
