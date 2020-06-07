import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ButtonsComponent} from './modules/buttons/buttons.component'
import {FormsComponent} from './modules/forms/forms.component'
import {DashboardComponent} from './modules/dashboard/dashboard.component'
import {PageNotFoundComponent} from './modules/sample-pages/page-not-found/page-not-found.component'
import {LoginComponent} from './modules/sample-pages/login/login.component'
import {LoadersComponent} from './modules/loaders/loaders.component'
import {BadgeComponent} from './modules/badge/badge.component'
import { AboutDokuComponent } from './modules/get-started/about-doku/about-doku.component';
import { DesignDokuComponent } from './modules/get-started/design-doku/design-doku.component';
import { DevelopDokuComponent } from './modules/get-started/develop-doku/develop-doku.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  // {path:'**', component: PageNotFoundComponent},

  {path: 'getstarted', children: [
    {path:'',redirectTo:'about', pathMatch:'full'},
    {path: 'about' , component: AboutDokuComponent},
    {path: 'design' , component: DesignDokuComponent},
    {path: 'develop' , component: DevelopDokuComponent}
  ]},
  {path: 'components', children: [
    //empty path used for redirect to first child automatically 
    {path: '', redirectTo:'buttons', pathMatch:'full'},
    {path: 'buttons' , component: ButtonsComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'child2', children:[
      {path: '' , redirectTo:'loaders', pathMatch:'full'},
      {path:'loaders', component: LoadersComponent},
      {path: 'badges', component: BadgeComponent}
    ]}
  ]},

  {path:'sample-pages', children:[
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent}
  ]},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
