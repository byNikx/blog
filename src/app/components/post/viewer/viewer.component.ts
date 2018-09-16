import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { MarkdownService } from '../../markdown-editor/markdown.service';

@Component({
  selector: 'nx-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit {

  str = '';

  constructor(public markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdownService.getRawText().subscribe(e => {
      //      console.log(e);
    });
  }


  @HostListener('window:storage', ['$event'])
  onStorageChange(ev: StorageEvent) {
    this.str = ev.newValue;
  }
}
