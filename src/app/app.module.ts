import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseComponent } from './shared/components/collapse/collapse.component';
import { AboutDokuComponent } from './modules/get-started/about-doku/about-doku.component';
import { DesignDokuComponent } from './modules/get-started/design-doku/design-doku.component';
import { DevelopDokuComponent } from './modules/get-started/develop-doku/develop-doku.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableComponent } from './shared/components/table/table.component';
import { IframeComponent } from './modules/sample-pages/iframe/iframe.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ToastService } from './shared/services/toast.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PageToastComponent } from './modules/page-toast/page-toast.component';
import { PageButtonComponent } from './modules/page-button/page-button.component';
import { SidebarRightNavComponent} from './layout/sidebar-right-nav/sidebar-right-nav.component'
import { SidebarRightService } from './layout/sidebar-right-nav/sidebar-right.service';
import { PageTableComponent } from './modules/page-table/page-table.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    
  };
}

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
    LoadersComponent,
    CollapseComponent,
    AboutDokuComponent,
    DesignDokuComponent,
    DevelopDokuComponent,
    ModalComponent,
    TableComponent,
    IframeComponent,
    AlertComponent,
    ToastComponent,
    PageToastComponent,
    PageButtonComponent,  
    SidebarRightNavComponent, PageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HighlightModule,
    NgSelectModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NavService, 
    ToastService,
    SidebarRightService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue:{
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
