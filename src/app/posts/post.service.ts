import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private dataService:DataService) { }

  getPosts():Observable<any>
  {
      return this.dataService.getPosts();
  }
}
