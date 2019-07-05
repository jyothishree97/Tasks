import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child72Component } from './child72.component';

describe('Child72Component', () => {
  let component: Child72Component;
  let fixture: ComponentFixture<Child72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
