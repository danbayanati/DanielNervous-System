import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoNeuronsComponent } from './nervo-neurons.component';

const routes: Routes = [{ path: '', component: NervoNeuronsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NervoNeuronsRoutingModule { }
