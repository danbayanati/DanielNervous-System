import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoIntroductionComponent } from './nervo-introduction.component';

describe('NervoIntroductionComponent', () => {
  let component: NervoIntroductionComponent;
  let fixture: ComponentFixture<NervoIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
