import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoCnsBrainCerebrumComponent } from './nervo-cns-brain-cerebrum.component';

describe('NervoCnsBrainCerebrumComponent', () => {
  let component: NervoCnsBrainCerebrumComponent;
  let fixture: ComponentFixture<NervoCnsBrainCerebrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoCnsBrainCerebrumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoCnsBrainCerebrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
