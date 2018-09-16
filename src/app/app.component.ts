import { Component, ViewChild, Inject, HostListener, ElementRef, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { MatToolbar, MatSidenavContent, MatSidenavContainer, MatIconRegistry, MatSnackBar } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from './services/scroll/scroll.service';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { NotificationService } from './services/notification/notification.service';
import { AuthenticationService } from './services/authentication/authentication.service';


declare const gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSidenavContent) body: ElementRef;
  @ViewChild('topBar') private topBar: MatToolbar;
  constructor(
    public layout: LayoutService,
    private scrollService: ScrollService,
    private scrollDispatcher: ScrollDispatcher,
    private notification: NotificationService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    public authenticationService: AuthenticationService,
    sanitizer: DomSanitizer,
    iconRegistry: MatIconRegistry
  ) {

    ['facebook', 'twitter', 'linkedin', 'googleplus', 'whatsapp'].forEach(icon => {
      const location = `assets/icons/${icon}.svg`;
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(location)
      );
    });

    authenticationService.google.onSignInStatusChange(status => {
      authenticationService.isSignedIn = status;
      this.changeDetectorRef.detectChanges();
    });

    authenticationService.google.onUserChange(user => {

      // Getting currently signed in user's ID token provided by google
      const token = authenticationService.google.currentUser.getAuthResponse();
      if (token.id_token) {
        this.authenticationService.tokenSignIn(token.id_token).toPromise().then(verifiedUser => {
          this.authenticationService.currentUser = verifiedUser;
          this.changeDetectorRef.detectChanges();
        }).catch(error => {
          this.notification.show.snackbar(error.message);
        });
      } else {
        console.log('logged out!');
      }

    });
  }

  get sideNavMode(): string {
    return this.layout.media.isActive('gt-sm') ? 'side' : 'over';
  }


  signIn() {
    this.authenticationService.google.signIn().then(user => {
      this.notification.show.snackbar('Signed in successfully!');
    }).catch(error => {
      const a = this.notification.show.snackbar('Something went wrong.', 'Try again');
    });
  }

  signOut() {
    this.authenticationService.google.signOut().then(status => {
      this.notification.show.snackbar('Signed out successfully!');
    }).catch(error => {
      this.notification.show.snackbar('Something went wrong.', 'Sign out');
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
