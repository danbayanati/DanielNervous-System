import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoCnsComponent } from './nervo-cns.component';

describe('NervoCnsComponent', () => {
  let component: NervoCnsComponent;
  let fixture: ComponentFixture<NervoCnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoCnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoCnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
