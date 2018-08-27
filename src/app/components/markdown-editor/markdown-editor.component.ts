import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkdownService } from '../markdown-editor/markdown.service';

declare const window: any;

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
export class MarkdownEditorComponent implements OnInit, AfterViewInit, OnDestroy {

  private toolbarActions = [
    {
      icon: ''
    }
  ];
  editorInstance: any;
  markdownText: FormControl;
  private _editorPanel: ElementRef;
  private _previewPanel: ElementRef;
  private editorPanelInputListener: Function;

  @ViewChild('editorPanel') set editorPanel(panel) {
    this._editorPanel = panel;
  }
  get editorPanel() {
    return this._editorPanel.nativeElement;
  }

  @ViewChild('preview') set previewPanel(panel) {
    this._previewPanel = panel;
  }
  get previewPanel() {
    return this._previewPanel.nativeElement;
  }


  constructor(private markdownService: MarkdownService, private renderer: Renderer2) {
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.editorPanel.contentEditable = true;
    this.editorPanelInputListener = this.renderer.listen(this.editorPanel, 'input', (event) => {
      this.markdownService.setMarkdownString(event.target.innerText);
      window.localStorage.setItem('markdownString', event.target.innerText);
    });
  }

  ngOnDestroy() {
    this.editorPanelInputListener();
  }

}
