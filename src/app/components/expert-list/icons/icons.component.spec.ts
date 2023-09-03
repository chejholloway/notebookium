import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { expertMock } from '../../../mocks/expertMock';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    component.expert = expertMock.toString();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
