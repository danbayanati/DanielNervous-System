import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoFeaturesComponent } from './nervo-features.component';

describe('NervoFeaturesComponent', () => {
  let component: NervoFeaturesComponent;
  let fixture: ComponentFixture<NervoFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
