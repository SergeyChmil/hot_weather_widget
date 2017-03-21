import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortListItemComponent } from './resort-list-item.component';

describe('ResortListItemComponent', () => {
  let component: ResortListItemComponent;
  let fixture: ComponentFixture<ResortListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
