import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, forwardRef, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MODULES } from './material/material.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

/**
 * Custom services
 */
import { LayoutService } from './services/layout/layout.service';

/**
 * Custom components
 */
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { PostPreviewComponent } from './components/post/preview/post-preview/post-preview.component';
import { PostPreviewWithImageComponent } from './components/post/preview/post-preview-with-image/post-preview-with-image.component';
import { SearchBarTopComponent } from './components/search/search-bar-top/search-bar-top.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MarkdownPipe } from './components/markdown-editor/markdown.pipe';
import { MarkdownPreviewDirective } from './components/markdown-editor/markdown-preview.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PostPreviewComponent,
    PostPreviewWithImageComponent,
    SearchBarTopComponent,
    MarkdownEditorComponent,
    HomeComponent,
    MarkdownPipe,
    MarkdownPreviewDirective
  ],
  imports: [
    ...MAT_MODULES,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
