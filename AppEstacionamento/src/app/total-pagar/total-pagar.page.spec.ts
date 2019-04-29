import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPagarPage } from './total-pagar.page';

describe('TotalPagarPage', () => {
  let component: TotalPagarPage;
  let fixture: ComponentFixture<TotalPagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPagarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
