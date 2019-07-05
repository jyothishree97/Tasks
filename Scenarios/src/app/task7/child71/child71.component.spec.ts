import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child71Component } from './child71.component';

describe('Child71Component', () => {
  let component: Child71Component;
  let fixture: ComponentFixture<Child71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
