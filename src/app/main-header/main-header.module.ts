import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { CoreModule } from '../core/core.module';
import { UiModule } from '../ui/ui.module';
import { ProjectModule } from '../project/project.module';
import { RouterModule } from '@angular/router';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    ProjectModule,
    RouterModule,
    EcoFabSpeedDialModule,
  ],
  declarations: [MainHeaderComponent],
  exports: [MainHeaderComponent],
})
export class MainHeaderModule {
}
