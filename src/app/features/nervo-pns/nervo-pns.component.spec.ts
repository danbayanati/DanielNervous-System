import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoPnsComponent } from './nervo-pns.component';

describe('NervoPnsComponent', () => {
  let component: NervoPnsComponent;
  let fixture: ComponentFixture<NervoPnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoPnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoPnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
