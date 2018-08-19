import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

@Component({
  selector: 'nx-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit, AfterViewInit {
  private _jsTab: ElementRef;
  private _htmlTab: ElementRef;
  private _cssTab: ElementRef;

  @ViewChild('jsTab', { read: ElementRef }) set jsTab(tab: ElementRef) {
    this._jsTab = tab;
  }
  get jsTab(): ElementRef {
    return this._jsTab;
  }

  @ViewChild('htmlTab', { read: ElementRef }) set htmlTab(tab: ElementRef) {
    this._htmlTab = tab;
  }
  get htmlTab(): ElementRef {
    return this._htmlTab;
  }

  @ViewChild('cssTab', { read: ElementRef }) set cssTab(tab: ElementRef) {
    this._cssTab = tab;
  }
  get cssTab(): ElementRef {
    return this._cssTab;
  }

  html = `<!DOCTYPE html>
  <title>Title</title>
  
  <style>body {width: 500px;}</style>
  
  <script type="application/javascript">
    function $init() {return true;}
  </script>
  
  <body>
    <p checked class="title" id='title'>Title</p>
    <!-- here goes the rest of the page -->
  </body>`;

  js = `const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'hero/:id',      component: HeroDetailComponent },
    {
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    },
    { path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    ...
  })
  export class AppModule { }`;

  css = `@font-face {
    font-family: Chunkfive; src: url('Chunkfive.otf');
  }
  
  body, .usertext {
    color: #F0F0F0; background: #600;
    font-family: Chunkfive, sans;
  }
  
  @import url(print.css);
  @media print {
    a[href^=http]::after {
      content: attr(href)
    }
  }`;
  constructor() { }

  ngOnInit() {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);
  }

  ngAfterViewInit() {
    console.log(this.jsTab.nativeElement);
    hljs.highlightBlock(this.jsTab.nativeElement);
    hljs.highlightBlock(this.htmlTab.nativeElement);
    hljs.highlightBlock(this.cssTab.nativeElement);
  }

  escapeHTML(htmlString: string) {
    return htmlString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
