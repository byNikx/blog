import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  _markdownString: Observable<any>;
  constructor() { }

  getRawText(): Observable<any> {
    return this._markdownString;
  }

  set markdownString(markdownString: Observable<any>) {
    this._markdownString = markdownString;
  }
}
