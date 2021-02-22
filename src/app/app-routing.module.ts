import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoHomeComponent } from './features/nervo-home/nervo-home.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./features/nervo-introduction/nervo-introduction.module').then(m => m.NervoIntroductionModule)
  },
  {
    path: 'cns',
    loadChildren: () => import('./features/nervo-cns/nervo-cns.module').then(m => m.NervoCnsModule)
  },
  {
    path: 'pns',
    loadChildren: () => import('./features/nervo-pns/nervo-pns.module').then(m => m.NervoPnsModule)
  },
  {
    path: '',
    component: NervoHomeComponent,
  },
  {
    path: 'neurons',
    loadChildren: () => import('./features/nervo-neurons/nervo-neurons.module').then(m => m.NervoNeuronsModule)
  },
  {
    path: 'synapse',
    loadChildren: () => import('./features/nervo-synapse/nervo-synapse.module').then(m => m.NervoSynapseModule)
  },
  {
    path: 'funfact',
    loadChildren: () => import('./features/nervo-funfact/nervo-funfact.module').then(m => m.NervoFunfactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
