import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, LOCALE_ID, ApplicationRef } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MODULES } from './modules/material/material.module';

/**
 * Environment variables
 */
import { environment } from '../environments/environment';

/**
 * Custom services
 */
import { LayoutService } from './services/layout/layout.service';
import { AuthenticationService } from './services/authentication/authentication.service';

/**
 * Custom components
 */
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { PostPreviewComponent } from './components/post/preview/post-preview/post-preview.component';
import { PostPreviewWithImageComponent } from './components/post/preview/post-preview-with-image/post-preview-with-image.component';
import { SearchBarTopComponent } from './components/search/search-bar-top/search-bar-top.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MarkdownPipe } from './components/markdown-editor/markdown.pipe';
import { MarkdownPreviewDirective } from './components/markdown-editor/markdown-preview.directive';
import { ViewerComponent } from './components/post/viewer/viewer.component';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { SharingComponent } from './widgets/sharing/sharing.component';
import { ToolbarSigninComponent } from './components/signin-flow/toolbar-signin/toolbar-signin.component';
import { PostCategoryService } from './services/post-category/post-category.service';
import { Category } from './app.models';

declare const gapi: any;

export function initializeAuthentication(authenticationService: AuthenticationService, http: HttpClient): Function {
  return () => {
    return new Promise((resolve, reject) => {
      const googleWebConfig = environment.google.web;
      const params = {
        client_id: googleWebConfig.client_id
      };
      function _onSignInSuccess(user) {
        authenticationService.isSignedIn = true;
        authenticationService.currentUser = user;
        resolve();
      }
      function _onSignInError(error) {
        console.error('Unable to verify user, please login again.', error);
        resolve();
      }
      gapi.load('auth2', () => {
        gapi.auth2.init(params).then(onInit => {
          authenticationService.google.gapi = gapi;

          if (authenticationService.google.isSignedIn()) {

            // Getting currently signed in user's AuthResponse provided by google
            const token = authenticationService.google.currentUser.getAuthResponse();

            // Reload the AuthResponse if it's expired
            if (token.expires_in <= 0) {
              authenticationService.google.currentUser.reloadAuthResponse().then(authResponse => {
                /**
                * Verifying the integrity of the ID token and use the user
                * information contained in the token to establish a session
                */
                authenticationService
                  .tokenSignIn(authResponse.id_token)
                  .toPromise()
                  .then(_onSignInSuccess)
                  .catch(_onSignInError);
              });
            } else {
              /**
              * Verifying the integrity of the ID token and use the user
              * information contained in the token to establish a session
              */
              authenticationService
                .tokenSignIn(token.id_token)
                .toPromise()
                .then(_onSignInSuccess)
                .catch(_onSignInError);

            }
          } else {
            resolve();
          }
        }, onError => {
          reject('Something went wrong, please try again later.');
        });
      });

    });
  };
}

export function initializePostCategory(postCategoryService: PostCategoryService): Function {
  return () => new Promise((resolve, reject) => {
    postCategoryService
      .getPostCategories()
      .toPromise()
      .then((categories: Category[]) => {
        postCategoryService.postCategories = categories;
        resolve();
      })
      .catch(e => {
        console.warn('Unable to initialize post categories', e);
        resolve();
      });
  });
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PostPreviewComponent,
    PostPreviewWithImageComponent,
    SearchBarTopComponent,
    MarkdownEditorComponent,
    HomeComponent,
    MarkdownPipe,
    MarkdownPreviewDirective,
    ViewerComponent,
    CodeViewerComponent,
    SharingComponent,
    ToolbarSigninComponent,
  ],
  imports: [
    ...MAT_MODULES,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    LayoutService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuthentication,
      deps: [
        AuthenticationService,
        HttpClient
      ],
      multi: true
    }, {
      provide: APP_INITIALIZER,
      useFactory: initializePostCategory,
      deps: [
        PostCategoryService,
        HttpClient
      ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
