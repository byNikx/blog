import { Component, ElementRef, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'nx-container',
  host: {
  	'[class]': 'activeClass'
  },
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnDestroy{

	_element: any;
	activeClass: string;
	watcher: Subscription;

	constructor(element: ElementRef, private layout: LayoutService) {
		this._element = element.nativeElement;
		this.watcher = this.layout.getActiveBreakpoint().subscribe((breakpoint) => {
			this.updateContainer(this._element, breakpoint);
		});
	}

	updateContainer(element, breakpoint): void{
		if(!element)
			throw ReferenceError('No container defined.');

		this.activeClass = breakpoint;
	}

	ngOnDestroy(){
		this.watcher.unsubscribe();
	}

}
