import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route,RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { FeedBackComponent } from '../feedback/feedback.component';
import { AuthGuard } from '../../authService/authGuard';


export const routes:Routes=[
  {path :'' , component:LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard],
  children: [
    {path: 'feedback', component:FeedBackComponent,canActivate:[AuthGuard]},
    {path:':home', component: HomeComponent},
    {path:':home/:value/:filtertype', component: HomeComponent,canActivate:[AuthGuard]}
  ]},
  {path:'**',redirectTo:'notfound',pathMatch:'full'},
  {path:'notfound',component: NotfoundComponent, data:{errorMessage:'Not found'} }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
