import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkdownService } from '../markdown-editor/markdown.service';
import * as Quill from 'quill';

const Q_TOOLBAR_OPTIONS = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
];
const QUILL_OPTIONS = {
  placeholder: 'Compose an epic...',
  theme: 'snow',
  modules: {
    toolbar: Q_TOOLBAR_OPTIONS
  }
};

@Component({
  selector: 'nx-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {

  private toolbarActions = [
    {
      icon: ''
    }
  ];
  editorInstance: any;
  markdownText: FormControl;
  private _editorPanel: ElementRef;
  private _toolbar: ElementRef;

  @ViewChild('editorPanel') set editorPanel(panel) {
    this._editorPanel = panel;
  }
  get editorPanel() {
    return this._editorPanel.nativeElement;
  }

  @ViewChild('toolbar') set toolbar(toolbar) {
    this._toolbar = toolbar;
  }
  get toolbar() {
    return this._toolbar.nativeElement;
  }


  constructor(private markdownService: MarkdownService) {
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editorInstance = new Quill(this.editorPanel, {
      modules: {
        toolbar: {
          container: this.toolbar
        }
      },
      theme: 'snow'
    });

  }

}
