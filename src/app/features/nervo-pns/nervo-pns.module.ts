import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NervoPnsComponent } from './nervo-pns.component';
import { NervoPnsRoutingModule } from './nervo-pns-routing.module';
import { NervoPnsMainComponent } from './components/nervo-pns-main/nervo-pns-main.component';
import { NervoPnsDetailsComponent } from './components/nervo-pns-details/nervo-pns-details.component';

@NgModule({
  declarations: [NervoPnsComponent, NervoPnsMainComponent, NervoPnsDetailsComponent],
  imports: [
    CommonModule,
    NervoPnsRoutingModule
  ],
  exports: [NervoPnsComponent]
})
export class NervoPnsModule { }
