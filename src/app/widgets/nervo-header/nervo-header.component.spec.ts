import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoHeaderComponent } from './nervo-header.component';

describe('NervoHeaderComponent', () => {
  let component: NervoHeaderComponent;
  let fixture: ComponentFixture<NervoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
