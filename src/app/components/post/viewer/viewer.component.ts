import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from '../../markdown-editor/markdown.service';

@Component({
  selector: 'nx-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
  }
}
