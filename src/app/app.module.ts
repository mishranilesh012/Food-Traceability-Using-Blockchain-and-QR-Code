import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminBatchesComponent } from './admin-batches/admin-batches.component';
import { AdminFarmerReqComponent } from './admin-farmer-req/admin-farmer-req.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ProcessorComponent } from './processor/processor.component';
import { FarmInspectorComponent } from './farm-inspector/farm-inspector.component';
import { DistributorComponent } from './distributor/distributor.component';
import { RetailerComponent } from './retailer/retailer.component';
import { RegisterComponent } from './register/register.component';
import { TimelineComponent } from './timeline/timeline.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'adminportal',
    component: AdminportalComponent
  },
  {
    path: 'admin-batches',
    component: AdminBatchesComponent
  },
  {
    path: 'admin-farmer-req',
    component: AdminFarmerReqComponent
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent
  },
  {
    path: 'farmer',
    component: FarmerComponent
  },
  {
    path: 'farm-inspector',
    component: FarmInspectorComponent
  },
  {
    path: 'processor',
    component: ProcessorComponent
  },
  {
    path: 'distributor',
    component: DistributorComponent
  },
  {
    path: 'retailer',
    component: RetailerComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AdminportalComponent,
    NavbarComponent,
    LoginComponent,
    AdminBatchesComponent,
    AdminFarmerReqComponent,
    AdminUsersComponent,
    FarmerComponent,
    ProcessorComponent,
    FarmInspectorComponent,
    DistributorComponent,
    RetailerComponent,
    RegisterComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NgbModalConfig, NgbModal,NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
