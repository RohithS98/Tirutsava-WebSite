import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mad4ideasComponent } from './mad4ideas.component';

describe('Mad4ideasComponent', () => {
  let component: Mad4ideasComponent;
  let fixture: ComponentFixture<Mad4ideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mad4ideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mad4ideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
