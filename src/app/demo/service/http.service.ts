import {Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import  'rxjs/Rx';
@Injectable()
export class HttpService {
    
    constructor(private http: Http) {}
test:any;
    fetchGetData() {
        return this.http.get('https://awsome-colors.firebaseio.com/rectangles/datesval.json').map(
(res=> res.json()    )); 
                   
    }
     fetchGetDatarectabngles() {
        return this.http.get('https://awsome-colors.firebaseio.com/rectangles/rectvals.json').map(
(res=> res.json()    )); 
                   
    }
      postData(rectangles : any){
          const body = JSON.stringify(rectangles);
          const headers = new Headers();
          headers.append('Content-type','application.json');
return this.http.post('https://awsome-colors.firebaseio.com/data.json',body,{headers:headers}).map(
  (data : Response)  => data.json() 
)    ;

      }  
   
}