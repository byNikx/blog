import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  private _markdownString: BehaviorSubject<string> = new BehaviorSubject<string>('ssssssssssssssssssssss');
  constructor() { }

  getRawText(): BehaviorSubject<string> {
    return this._markdownString;
  }

  setMarkdownString(markdownString) {
    this._markdownString.next(markdownString);
  }
}
