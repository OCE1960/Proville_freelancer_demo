import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  //   private _Url = 'http://api.oce.com.ng/api';
   private _Url = 'http://localhost:8000/api';


  constructor(private http: HttpClient) { }



}
