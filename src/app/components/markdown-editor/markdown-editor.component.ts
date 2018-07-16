import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkdownService } from '../markdown-editor/markdown.service';
import * as CkClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CK_OPTIONS = {
  bodyClass: 'mat-typography',
  heading: {
    options: [
      // tslint:disable-next-line:max-line-length
      { model: 'paragraph', view: { name: 'p', classes: 'mat-body-1' }, title: 'Paragraph', class: 'ck-heading_paragraph', priority: 'high' },
      { model: 'display1', view: { name: 'h1', classes: 'mat-display-1' }, title: 'Display 1', class: 'ck-heading_heading1' },
      { model: 'display2', view: { name: 'h1', classes: 'mat-display-2' }, title: 'Display 2', class: 'ck-heading_heading1' },
      { model: 'display3', view: { name: 'h1', classes: 'mat-display-3' }, title: 'Display 3', class: 'ck-heading_heading1' },
      { model: 'display4', view: { name: 'h1', classes: 'mat-display-4' }, title: 'Display 4', class: 'ck-heading_heading1' },
      { model: 'heading1', view: { name: 'h1', classes: 'mat-headline' }, title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: { name: 'h2', classes: 'mat-title' }, title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: { name: 'h3', classes: 'mat-subheading-2' }, title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: { name: 'h4', classes: 'mat-subheading-1' }, title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
      { model: 'body1', view: { name: 'p', classes: 'mat-body-2' }, title: 'Body 2', class: 'mat-body-2' },
      { model: 'body2', view: { name: 'p', classes: 'mat-body-1' }, title: 'Body 1', class: 'mat-body-1' }
    ]
  };

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nx-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  private toolbarActions = [
    {
      icon: ''
    }
  ];
  markdownText: FormControl;
  private _editorPanel: ElementRef;
  @ViewChild('editorPanel') set editorPanel(panel) {
    this._editorPanel = panel;
  }
  get editorPanel() {
    return this._editorPanel.nativeElement;
  }
  constructor(private markdownService: MarkdownService) {
  }
  ngOnInit() {
    CkClassicEditor
      .create(this.editorPanel, CK_OPTIONS)
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
