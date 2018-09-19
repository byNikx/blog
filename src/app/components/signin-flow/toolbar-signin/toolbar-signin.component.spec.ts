import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSigninComponent } from './toolbar-signin.component';

describe('ToolbarSigninComponent', () => {
  let component: ToolbarSigninComponent;
  let fixture: ComponentFixture<ToolbarSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
