import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePostService } from './interface-post-service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService implements InterfacePostService{

  constructor(private dataService:DataService) { }

  getPosts():Observable<any>
  {
      return this.dataService.getPosts();
  }
}
