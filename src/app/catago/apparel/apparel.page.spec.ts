import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelPage } from './apparel.page';

describe('ApparelPage', () => {
  let component: ApparelPage;
  let fixture: ComponentFixture<ApparelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
