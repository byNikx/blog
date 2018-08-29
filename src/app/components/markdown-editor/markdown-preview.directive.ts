import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MarkdownService } from './markdown.service';
import { MarkdownPipe } from './markdown.pipe';

@Directive({
  selector: '[nxMarkdownPreview]'
})
export class MarkdownPreviewDirective implements OnInit {

  constructor(
    private element: ElementRef,
    public markdownService: MarkdownService,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.markdownService.getRawText().subscribe((text) => {
      if (text.length <= 0) {
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
      } else {
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
      }
      this.element.nativeElement.innerHTML = new MarkdownPipe().transform(text);
      console.log(this.element.nativeElement.textContent);
    });
  }
}
