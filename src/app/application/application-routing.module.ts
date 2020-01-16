import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404applicationComponent } from './page404application/page404application.component';

const routes: Routes = [
  {
    path: '', component: ApplicationComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'reports', loadChildren: () => import(`./reports/reports.module`).then(m => m.ReportsModule)  },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: Page404applicationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
