import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  _markdownString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  getRawText(): Observable<any> {
    return this._markdownString;
  }

  setMarkdownString(markdownString) {
    this._markdownString.next(markdownString);
  }
}
