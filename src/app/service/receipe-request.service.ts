import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceipeRequestService {

  constructor(private http: HttpClient) { }

  getReceipesList(){
    return this.http.get(`https://dummyjson.com/products`)
  }

  getRecipe(id: string | undefined): Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }

}
