import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoCnsBrainDetailsComponent } from './nervo-cns-brain-details.component';

describe('NervoCnsBrainDetailsComponent', () => {
  let component: NervoCnsBrainDetailsComponent;
  let fixture: ComponentFixture<NervoCnsBrainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoCnsBrainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoCnsBrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
