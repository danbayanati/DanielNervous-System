import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoBannerComponent } from './nervo-banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NervoBannerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NervoBannerComponent],
})
export class NervoBannerModule { }
