import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../app.models';



@Injectable({
  providedIn: 'root'
})
export class PostCategoryService {

  private _postCategories: Category[];
  set postCategories(categories: Category[]) {
    this._postCategories = categories;
  }
  get postCategories(): Category[] {
    return this._postCategories;
  }

  constructor(
    private http: HttpClient
  ) { }

  getPostCategories(): Observable<Category[]> {
    return of([{
      parent: null,
      id: 1,
      name: 'Technology'
    }, {
      parent: null,
      id: 2,
      name: 'Finance'
    }, {
      parent: null,
      id: 3,
      name: 'Entertainment & Gossip'
    }]);
    //    return this.http.get<Category[]>('');
  }
}
