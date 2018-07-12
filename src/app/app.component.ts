import { Component, ViewChild, Inject, HostListener, ElementRef } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { MatToolbar, MatSidenavContent, MatSidenavContainer } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from './services/scroll/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild(MatSidenavContainer) body: Element;
  @ViewChild('topBar') private topBar: MatToolbar;
  constructor(
    public layout: LayoutService,
    private scrollService: ScrollService,
    @Inject(DOCUMENT) private document: Document) {

    //    console.log(document);


  }

  ngAfterViewInit() {
    // this.scrollService.getScrollAsStream(this.body).subscribe(e => {
    //   console.log(e);
    // });
  }

}
