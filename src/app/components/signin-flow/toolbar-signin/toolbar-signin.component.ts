import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { User } from '../../../app.models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nx-toolbar-signin',
  templateUrl: './toolbar-signin.component.html',
  styleUrls: ['./toolbar-signin.component.scss']
})
export class ToolbarSigninComponent implements OnInit {

  @ViewChild('activeAvatar') private activeAvatar: ElementRef;

  constructor(
    public authenticationService: AuthenticationService,
    private sanitizer: DomSanitizer
  ) {

  }

  get user(): User {
    return this.authenticationService.currentUser;
  }

  ngOnInit() {
    //    console.log(this.activeAvatar);
  }

}
