import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, forwardRef, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_MODULES} from './material/material.module';

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

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PostPreviewComponent
  ],
  imports: [
    ... MAT_MODULES,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
