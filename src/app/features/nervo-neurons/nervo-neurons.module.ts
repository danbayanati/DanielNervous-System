import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NervoNeuronsRoutingModule } from './nervo-neurons-routing.module';
import { NervoNeuronsComponent } from './nervo-neurons.component';


@NgModule({
  declarations: [NervoNeuronsComponent],
  imports: [
    CommonModule,
    NervoNeuronsRoutingModule
  ]
})
export class NervoNeuronsModule { }
