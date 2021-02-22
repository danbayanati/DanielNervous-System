import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoIntroductionComponent } from './nervo-introduction.component';
import { NervoIntroductionRoutingModule } from './nervo-introduction-routing.module';

@NgModule({
  declarations: [NervoIntroductionComponent],
  imports: [
    CommonModule,
    NervoIntroductionRoutingModule
  ],
  exports: [NervoIntroductionComponent]
})
export class NervoIntroductionModule { }
