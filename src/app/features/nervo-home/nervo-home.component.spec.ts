import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoHomeComponent } from './nervo-home.component';

describe('NervoHomeComponent', () => {
  let component: NervoHomeComponent;
  let fixture: ComponentFixture<NervoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
