import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervoSynapseComponent } from './nervo-synapse.component';

describe('NervoSynapseComponent', () => {
  let component: NervoSynapseComponent;
  let fixture: ComponentFixture<NervoSynapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NervoSynapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NervoSynapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
