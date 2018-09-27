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

  private _disabled: boolean = true;
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }
  get disabled(): boolean {
    return this._disabled;
  }


  constructor(private markdownService: MarkdownService, private renderer: Renderer2) {
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.editorPanel.contentEditable = true;
    this.editorPanelInputListener = this.renderer.listen(this.editorPanel, 'input', (event) => {
      const input = event.target.innerText;
      this.markdownService.markdownString = input;
      this.disabled = input.length <= 0;
      window.localStorage.setItem('markdownString', event.target.innerText);
    });
  }

  ngOnDestroy() {
    this.editorPanelInputListener();
  }

}
