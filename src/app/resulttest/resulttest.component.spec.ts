import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulttestComponent } from './resulttest.component';

describe('ResulttestComponent', () => {
  let component: ResulttestComponent;
  let fixture: ComponentFixture<ResulttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
