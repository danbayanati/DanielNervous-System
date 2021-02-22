import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoNeuronsComponent } from './nervo-neurons.component';

describe('NervoNeuronsComponent', () => {
  let component: NervoNeuronsComponent;
  let fixture: ComponentFixture<NervoNeuronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoNeuronsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoNeuronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
