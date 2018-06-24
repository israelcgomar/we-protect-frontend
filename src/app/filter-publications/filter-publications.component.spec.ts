import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPublicationsComponent } from './filter-publications.component';

describe('FilterPublicationsComponent', () => {
  let component: FilterPublicationsComponent;
  let fixture: ComponentFixture<FilterPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
