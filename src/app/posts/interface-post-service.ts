import { Observable } from "rxjs";

export interface InterfacePostService 
{
    getPosts():Observable<any>;
}
