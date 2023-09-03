import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Expert } from '../../interfaces/expert.model';
import { MaterialModule } from '../../modules/material/material.module';
import { ExpertListComponent } from './expert-list.component';

@Component({ selector: 'app-avatar', template: '' })
class AvatarComponent {
  @Input() expert: Expert;
}
@Component({ selector: 'app-cover-pic', template: '' })
class CoverPicComponent {
  @Input() expert: Expert;
}

describe('ExpertListComponent', () => {
  let component: ExpertListComponent;
  let fixture: ComponentFixture<ExpertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertListComponent, AvatarComponent, CoverPicComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FlexLayoutModule,
        MaterialModule,
        ScrollingModule,
        PlatformModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });
});
