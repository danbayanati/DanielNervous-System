import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoCnsBrainCerebrumComponent } from './components/nervo-cns-brain-cerebrum/nervo-cns-brain-cerebrum.component';
import { NervoCnsBrainDetailsComponent } from './components/nervo-cns-brain-details/nervo-cns-brain-details.component';
import { NervoCnsBrainComponent } from './components/nervo-cns-brain/nervo-cns-brain.component';
import { NervoCnsComponent } from './nervo-cns.component';

const routes: Routes = [
    {
        path: '',
        component: NervoCnsComponent,
        children: [
            {
                path: 'brain',
                component: NervoCnsBrainDetailsComponent,
            },
            {
                path: 'cerebrum',
                component: NervoCnsBrainCerebrumComponent,
            },
            {
                path: '',
                component: NervoCnsBrainComponent,
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NervoCnsRoutingModule { }
