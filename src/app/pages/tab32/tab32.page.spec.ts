import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab32Page } from './tab32.page';

describe('Tab32Page', () => {
  let component: Tab32Page;
  let fixture: ComponentFixture<Tab32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});