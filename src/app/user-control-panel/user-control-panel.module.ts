import { NgModule } from '@angular/core';

import { UserControlPanelComponent } from './components/user-control-panel/user-control-panel.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { UserControlPanelRoutingModule } from './user-control-panel-routing.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OneColumnLayoutComponent } from './components/one-column-layout/one-column-layout';
import { ROSModule } from './pages/ros/ros.module';

const PAGES_COMPONENTS = [
  UserControlPanelComponent,
  FooterComponent,
  HeaderComponent,
  OneColumnLayoutComponent
];

@NgModule({
  imports: [
    SharedModule,
    DashboardModule,
    NotFoundModule,
    ROSModule,
    UserControlPanelRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class UserControlPanelModule {
}
