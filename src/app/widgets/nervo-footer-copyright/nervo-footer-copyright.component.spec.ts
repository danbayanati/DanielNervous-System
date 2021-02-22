import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoFooterCopyrightComponent } from './nervo-footer-copyright.component';

describe('NervoFooterCopyrightComponent', () => {
  let component: NervoFooterCopyrightComponent;
  let fixture: ComponentFixture<NervoFooterCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoFooterCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoFooterCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
