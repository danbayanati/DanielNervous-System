import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NervoPnsDetailsComponent } from './components/nervo-pns-details/nervo-pns-details.component';
import { NervoPnsMainComponent } from './components/nervo-pns-main/nervo-pns-main.component';
import { NervoPnsComponent } from './nervo-pns.component';

const routes: Routes = [
    {
        path: '',
        component: NervoPnsComponent,
        children: [
            {
                path: 'details',
                component: NervoPnsDetailsComponent,
            },
            {
                path: '',
                component: NervoPnsMainComponent,
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NervoPnsRoutingModule { }
