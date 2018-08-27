import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  constructor() {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);
    marked.setOptions({
      highlight: function (code, lang, callback) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  }
  transform(value: any, args?: any): any {
    return marked(value);
  }

}
