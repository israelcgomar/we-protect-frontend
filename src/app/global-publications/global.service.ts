import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../profile/user.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class GlobalPublicationsService {
  private baseUrl:string = environment.base_uri;

  constructor(private http: HttpClient) {

  }
  public setHEaders() {
    let headers= new HttpHeaders();
    headers.append('Accepts','application/json');
  }

  public createNews(postN:User){
    this.setHEaders();
    return this.http.post(this.baseUrl+'post', postN);
  }

  public getData(){
    return this.http.get(this.baseUrl+'post');
  }
  
  private extractData( res: Response ){
    let body = res.json();
    return body || {};
  }

}
