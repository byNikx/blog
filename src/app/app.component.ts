import { Component, ViewChild, Inject, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { MatToolbar, MatSidenavContent, MatSidenavContainer, MatIconRegistry } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from './services/scroll/scroll.service';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  @ViewChild(MatSidenavContent) body: ElementRef;
  @ViewChild('topBar') private topBar: MatToolbar;
  constructor(
    public layout: LayoutService,
    private scrollService: ScrollService,
    private scrollDispatcher: ScrollDispatcher,
    @Inject(DOCUMENT) private document: Document,
    sanitizer: DomSanitizer,
    iconRegistry: MatIconRegistry) {
    ['facebook', 'twitter', 'linkedin', 'googleplus', 'whatsapp'].forEach(icon => {
      const location = `assets/icons/${icon}.svg`;
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(location)
      );
    });
  }

  ngAfterViewInit() {
    // this.scrollService.getScrollAsStream(this.body).subscribe(e => {
    //   console.log(e);
    // });
    // this.scrollDispatcher.ancestorScrolled(this.body).subscribe(a => {
    //   console.log('scroll', a);
    // });
    //    console.log(this.scrollDispatcher.scrollContainers);
    // this.scrollDispatcher.scrollContainers.forEach((e, i) => {
    //   i.elementScrolled().pipe(debounceTime(100)).subscribe(e => {
    //     console.log(e);
    //   });
    // });
    // //    this.scrollDispatcher.scrollContainers.values();
    //    this.body._container.scrollable.elementScrolled().subscribe(e => {
    //   console.log(e);
    // });
  }

}
