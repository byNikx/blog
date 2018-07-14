import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MarkdownService } from './markdown.service';
import { MarkdownPipe } from './markdown.pipe';

@Directive({
  selector: '[nxMarkdownPreview]'
})
export class MarkdownPreviewDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.markdownService.getRawText().subscribe((text) => {
      this.element.nativeElement.innerHTML = new MarkdownPipe().transform(text);
    });
  }
}
