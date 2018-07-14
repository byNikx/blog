import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MarkdownService } from '../markdown-editor/markdown.service';
import { Subscription } from 'rxjs';


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
  private markdownSubscription: Subscription;
  markdownText: FormControl;
  constructor(private markdownService: MarkdownService) {
    this.markdownText = new FormControl();
  }
  ngOnInit() {
    this.markdownService.markdownString = this.markdownText.valueChanges;
  }

}
