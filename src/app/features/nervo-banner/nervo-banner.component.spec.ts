import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoBannerComponent } from './nervo-banner.component';

describe('NervoBannerComponent', () => {
  let component: NervoBannerComponent;
  let fixture: ComponentFixture<NervoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
