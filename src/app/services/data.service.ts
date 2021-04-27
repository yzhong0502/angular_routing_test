import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { Product } from "../product/product";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string="/assets/data.json";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}
