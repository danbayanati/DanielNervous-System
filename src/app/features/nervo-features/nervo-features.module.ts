import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoFeaturesComponent } from './nervo-features.component';

@NgModule({
  declarations: [NervoFeaturesComponent],
  imports: [
    CommonModule
  ],
  exports: [NervoFeaturesComponent],
})
export class NervoFeaturesModule { }
