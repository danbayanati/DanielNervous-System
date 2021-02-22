import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoHomeComponent } from './nervo-home.component';
import { NervoFeaturesModule } from '../nervo-features/nervo-features.module';
import { NervoBannerModule } from '../nervo-banner/nervo-banner.modules';

@NgModule({
  declarations: [NervoHomeComponent],
  imports: [
    CommonModule,
    NervoFeaturesModule,
    NervoBannerModule
  ],
  exports: [NervoHomeComponent]
})
export class NervoHomeModule { }
