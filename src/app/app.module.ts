import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyOwnCustomMaterialModule } from './material/material.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedBackComponent} from './feedback/feedback.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {AutoScrollDirective} from './directives/auto-scroll-directive';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../authService/authGuard';
import { HiringTrackComponent } from './hiringtrack/hiringtrack.component';
import { CandidateTrackComponent } from './candidatetrack/candidatetrack.component';
import { InterviewerTrackComponent } from './interviewertrack/interviewertrack.component';
import { NewCandidateComponent } from './newcandidate/newcandidate.component';
import { ExistingCandidateComponent } from './existingcandidate/existingcandidate.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from './services/candidate.service';
import { SkillSetPipe } from './pipes/skillset.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent
    ,HomeComponent
    ,FeedBackComponent
    ,AutoScrollDirective
    ,HiringTrackComponent
    ,CandidateTrackComponent
    ,InterviewerTrackComponent
    ,NewCandidateComponent
    ,ExistingCandidateComponent
    ,SkillSetPipe
  ],
  imports: [
    BrowserModule
    ,routing
    ,MyOwnCustomMaterialModule
    ,FormsModule
    ,HttpModule
    ,HttpClientModule
    ,NgSelectModule
  ],
  providers: [AuthGuard,CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
