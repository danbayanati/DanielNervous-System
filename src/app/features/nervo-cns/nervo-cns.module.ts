import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoCnsComponent } from './nervo-cns.component';
import { NervoCnsRoutingModule } from './nervo-cns-routing.module';
import { NervoCnsBrainComponent } from './components/nervo-cns-brain/nervo-cns-brain.component';
import { NervoCnsBrainDetailsComponent } from './components/nervo-cns-brain-details/nervo-cns-brain-details.component';
import { NervoCnsBrainCerebrumComponent } from './components/nervo-cns-brain-cerebrum/nervo-cns-brain-cerebrum.component';

@NgModule({
  declarations: [NervoCnsComponent, NervoCnsBrainComponent, NervoCnsBrainDetailsComponent, NervoCnsBrainCerebrumComponent],
  imports: [
    CommonModule,
    NervoCnsRoutingModule
  ],
  exports: [NervoCnsComponent]
})
export class NervoCnsModule { }
