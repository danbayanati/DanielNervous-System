import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoPnsDetailsComponent } from './nervo-pns-details.component';

describe('NervoPnsDetailsComponent', () => {
  let component: NervoPnsDetailsComponent;
  let fixture: ComponentFixture<NervoPnsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoPnsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoPnsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
