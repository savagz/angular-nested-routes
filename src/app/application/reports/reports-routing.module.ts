import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { CustomComponent } from './custom/custom.component';
import { Page404reportsComponent } from './page404reports/page404reports.component';

const routes: Routes = [
  {
    path: '', component: ReportsComponent, children: [
      { path: 'basic', component: BasicComponent },
      { path: 'advanced', component: AdvancedComponent },
      { path: 'custom', component: CustomComponent },
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      { path: '**', component: Page404reportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
