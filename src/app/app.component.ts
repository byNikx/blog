import { Component, ViewChild, Inject, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { MatToolbar, MatSidenavContent, MatSidenavContainer, MatIconRegistry } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from './services/scroll/scroll.service';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';


declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  private GoogleAuth: any;

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

  signin() {
    if (this.GoogleAuth) {
      this.GoogleAuth.signIn().then(success => {
        console.log('success', success);
      }, error => {
        console.log('error', error);
      });
    }
  }

  initAuthentication() {

  }

  ngAfterViewInit() {
    const params = {
      client_id: '903207276766-dh56up2ltarmru9tc1q93t66hhbu8ijl.apps.googleusercontent.com'
    };

    gapi.load('auth2', () => {
      console.log('auth2 is loaded!');
      this.GoogleAuth = gapi.auth2.init(params);
      this.GoogleAuth.then(onInit => {
        console.log('initialized!', onInit);
      }, onError => {
        console.log('initialization failed!', onError);
      });
    });
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
