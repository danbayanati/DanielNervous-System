import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoIntroductionComponent } from './nervo-introduction.component';

const routes: Routes = [{ path: '', component: NervoIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NervoIntroductionRoutingModule { }
