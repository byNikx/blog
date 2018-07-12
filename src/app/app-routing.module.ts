import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { HomeComponent } from './components/home/home.component';

/****Components****/


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: MarkdownEditorComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }