import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkdownService } from '../markdown-editor/markdown.service';
import { listener } from '@angular/core/src/render3/instructions';


@Component({
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
    this.editorPanel.contentEditable = true;
    this.markdownText = new FormControl();
    this.markdownService.markdownString = this.markdownText.valueChanges;

    this.editorPanel.addEventListener('input', (event) => {
      this.markdownText.setValue(event.target.innerText);
      //      event.target.innerHTML = event.target.innerText;
      //    event.target.focus();
    });
  }

}
