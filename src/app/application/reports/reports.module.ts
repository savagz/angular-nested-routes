import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { CustomComponent } from './custom/custom.component';
import { Page404reportsComponent } from './page404reports/page404reports.component';

@NgModule({
  declarations: [
    ReportsComponent,
    BasicComponent, 
    AdvancedComponent,  
    CustomComponent,
    Page404reportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
