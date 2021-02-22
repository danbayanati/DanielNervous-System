import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoCnsBrainComponent } from './nervo-cns-brain.component';

describe('NervoCnsBrainComponent', () => {
  let component: NervoCnsBrainComponent;
  let fixture: ComponentFixture<NervoCnsBrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoCnsBrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoCnsBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
