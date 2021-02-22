import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NervoSynapseRoutingModule } from './nervo-synapse-routing.module';
import { NervoSynapseComponent } from './nervo-synapse.component';


@NgModule({
  declarations: [NervoSynapseComponent],
  imports: [
    CommonModule,
    NervoSynapseRoutingModule
  ]
})
export class NervoSynapseModule { }
