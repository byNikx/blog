import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewWithImageComponent } from './post-preview-with-image.component';

describe('PostPreviewWithImageComponent', () => {
  let component: PostPreviewWithImageComponent;
  let fixture: ComponentFixture<PostPreviewWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreviewWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
