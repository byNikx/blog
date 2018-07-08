import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { BehaviorSubject, Subscription } from 'rxjs';

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

@Injectable()
export class LayoutService implements OnDestroy {

	activeBreakpoint = new BehaviorSubject<string>(null);
	watcher: Subscription;
	constructor(public media: ObservableMedia) {

		this.watcher = media.subscribe((change: MediaChange) => {

			let bp = this.detectBreakpoint(
				BREAKPOINTS.filter((breakpoint) => {
					return change.mqAlias == breakpoint;
				})
			);
			this.activeBreakpoint.next(bp);
		});

	}


	detectBreakpoint(breakpoints): string {
		if (Object.prototype.toString.call(breakpoints) === '[object Array]') {

			if (breakpoints.length === 1) {
				return breakpoints.shift();
			} else {
				return null;
			}

		} else {
			return null;
		}
	}

	getActiveBreakpoint() {
		return this.activeBreakpoint;
	}

	ngOnDestroy() {
		this.watcher.unsubscribe();
	}

}
