import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ButtonsComponent } from './modules/buttons/buttons.component';
import { FormsComponent } from './modules/forms/forms.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/sample-pages/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/sample-pages/login/login.component';
import { MenuListItemComponent } from './layout/sidebar/menu-list-item/menu-list-item.component';
import { NavService } from './layout/sidebar/nav.service';
import { LoadersComponent } from './shared/components/loaders/loaders.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BadgeComponent,
    SidebarComponent,
    ButtonsComponent,
    FormsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
    MenuListItemComponent,
    LoadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
