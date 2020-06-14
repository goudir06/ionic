import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab33Page } from './tab33.page';

describe('Tab33Page', () => {
  let component: Tab33Page;
  let fixture: ComponentFixture<Tab33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab33Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
