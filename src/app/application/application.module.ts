import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404applicationComponent } from './page404application/page404application.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent, 
    Page404applicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
