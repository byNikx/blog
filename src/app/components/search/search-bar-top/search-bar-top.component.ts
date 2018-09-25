import { Component, OnInit, ViewContainerRef, Renderer2, HostListener, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx-search-bar-top',
  templateUrl: './search-bar-top.component.html',
  styleUrls: ['./search-bar-top.component.scss']
})
export class SearchBarTopComponent implements OnInit {

  private _hostElement: ElementRef;
  set hostElement(element) {
    this._hostElement = element;
  }
  get hostElement() {
    return this._hostElement.nativeElement;
  }

  private _searchContainer: ElementRef;
  @ViewChild('searchWrap') set searchContainer(element) {
    this._searchContainer = element;
  }
  get searchContainer() {
    return this._searchContainer.nativeElement;
  }

  private _input: ElementRef;
  @ViewChild('input') set input(element) {
    this._input = element;
  }
  get input() {
    return this._input.nativeElement;
  }

  @Output('focus') focus: EventEmitter<any> = new EventEmitter();
  @Output('blur') blur: EventEmitter<any> = new EventEmitter();

  @HostListener('focusin', ['$event']) handleFocus(event) {
    this.renderer.addClass(this.hostElement, 'active');
    this.focus.emit(event);
  }
  @HostListener('click') private handleClick() {
    this.input.focus();
  }
  @HostListener('focusout', ['$event.target']) handleBlur(event) {
    this.renderer.removeClass(this.hostElement, 'active');
    this.blur.emit(event);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.hostElement = this.viewContainerRef.element;
  }

  ngOnInit() {
    //    this.renderer.setStyle(this.viewContainerRef.element.nativeElement, 'flex', 1)
  }


}
