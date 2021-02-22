import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoFunfactComponent } from './nervo-funfact.component';

describe('NervoFunfactComponent', () => {
  let component: NervoFunfactComponent;
  let fixture: ComponentFixture<NervoFunfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoFunfactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoFunfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
