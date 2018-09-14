import { Injectable } from '@angular/core';

declare enum GoogleAuthentication {

  // The user closed the popup before finishing the sign in flow.
  PopupClosedByUser = 'popup_closed_by_user',

  // The user denied the permission to the scopes required.
  AccessDenied = 'access_denied',

  /* No user could be automatically selected without prompting the consent flow.
   Error raised when using signIn with prompt: 'none' option.
   This option should not be required to use, as gapi.auth2.init will
   automatically sign in the user if previously signed in during a previous session. */
  ImmediateFailed = 'immediate_failed',

}

interface User {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _google: any = {

    /**
     *  Google APIs library object.
     */
    _gapi: null,
    get gapi(): any {
      return this._gapi;
    },
    set gapi(gapi: any) {
      this._gapi = gapi;
    },

    /**
     * Returns the GoogleAuth object. You must initialize the GoogleAuth object with gapi.auth2.init() before
     * calling this method.
     * @returns gapi.auth2.GoogleAuth
     */
    get authInstance(): any {
      return this.gapi.auth2.getAuthInstance();
    },

    /**
     * Returns whether the current user is currently signed in.
     * @returns Boolean
     */
    isSignedIn(): boolean {
      return this.authInstance.isSignedIn.get();
    },

    /**
     * Listen for changes in the current user's sign-in state.
     */
    onSignInStatusChange(listener: Function): Function {
      return this.authInstance.isSignedIn.listen(listener);
    },
    /**
     * Signs in the user with the options specified at the time of initialization.
     * @returns Promise
     */
    signIn(): Promise<any> {
      return this.authInstance.signIn();
    },

    /**
     * Signs out the current account from the application.
     * @returns Promise
     */
    signOut(): Promise<any> {
      return this.authInstance.signOut();
    },

    /**
     * Returns a GoogleUser object that represents the current user. Note that in a newly-initialized GoogleAuth
     * instance, the current user has not been set. Use the currentUser.listen() method or the GoogleAuth.then() to
     * get an initialized GoogleAuth instance.
     * @returns GoogleUser
     */
    get currentUser(): any {
      return this.authInstance.currentUser.get();
    },

    /**
     * Listen for changes in currentUser.
     */
    onUserChange(listener: Function): Function {
      return this.authInstance.currentUser.listen(listener);
    }

  };

  set google(google: any) {
    this._google = google;
  }
  get google(): any {
    return this._google;
  }

  private _isSignedIn: boolean;
  set isSignedIn(signedIn: boolean) {
    this._isSignedIn = signedIn;
  }
  get isSignedIn(): boolean {
    return this._isSignedIn;
  }

  /**
   * Returns currently active user.
   */
  private _currentUser: User;
  get currentUser(): any {
    return this._currentUser;
  }
  set currentUser(user: any) {
    const profile = user.getBasicProfile();
    this._currentUser = {
      id: profile.getId(),
      name: profile.getName(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      email: profile.getEmail(),
      avatar: profile.getImageUrl()
    };
  }

  constructor() { }

}
