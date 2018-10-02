import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  OnDestroy
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { MarkdownService } from '../markdown-editor/markdown.service';
import { Subscription } from 'rxjs';
import { PostCategoryService } from '../../services/post-category/post-category.service';

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
  post: FormGroup;
  private _previewPanel: ElementRef;
  private postFormListener: Subscription;


  @ViewChild('preview') set previewPanel(panel) {
    this._previewPanel = panel;
  }
  get previewPanel() {
    return this._previewPanel.nativeElement;
  }

  constructor(
    private markdownService: MarkdownService,
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    public postCategoryService: PostCategoryService
  ) {
    this.post = this.formBuilder.group({
      category: new FormControl('', Validators.compose([Validators.required])),
      title: new FormControl('', Validators.compose([Validators.required])),
      text: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  ngOnInit() {
    this.postFormListener = this.post.valueChanges.subscribe(post => {
      this.markdownService.markdownString = post.text;
      window.localStorage.setItem('markdownString', post.text);
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    if (this.postFormListener) {
      this.postFormListener.unsubscribe();
    }
  }

  setPostCategory(category): void {
    this.post.patchValue({
      category: category.name
    });
  }

}
