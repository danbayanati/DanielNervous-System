import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoFunfactComponent } from './nervo-funfact.component';

const routes: Routes = [{ path: '', component: NervoFunfactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NervoFunfactRoutingModule { }
