import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadFormComponent } from './mad-form.component';

describe('MadFormComponent', () => {
  let component: MadFormComponent;
  let fixture: ComponentFixture<MadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
