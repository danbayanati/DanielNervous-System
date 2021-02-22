import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoPnsMainComponent } from './nervo-pns-main.component';

describe('NervoPnsMainComponent', () => {
  let component: NervoPnsMainComponent;
  let fixture: ComponentFixture<NervoPnsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoPnsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoPnsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
