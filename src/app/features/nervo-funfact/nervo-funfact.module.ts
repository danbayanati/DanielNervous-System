import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NervoFunfactRoutingModule } from './nervo-funfact-routing.module';
import { NervoFunfactComponent } from './nervo-funfact.component';


@NgModule({
  declarations: [NervoFunfactComponent],
  imports: [
    CommonModule,
    NervoFunfactRoutingModule
  ]
})
export class NervoFunfactModule { }
