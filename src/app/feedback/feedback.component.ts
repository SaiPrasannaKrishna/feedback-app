import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormControl, NgForm, Form } from '@angular/forms';
import { Observable, interval, Subscription } from 'rxjs';
import { Levels} from '../datalayer/levels';
import {AutoScrollDirective} from '../directives/auto-scroll-directive';
import { CandidateType } from '../interfaces/candidateType';
import { FeedbackType } from '../interfaces/feedbackType';
import {CandidateService} from '../services/candidate.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedBackComponent implements OnInit,OnDestroy {
  
  @Input('f') form:NgForm;

  private intervalSubscription:Subscription;
  public candidateLists;
  public feedbackLists;
  candidate:CandidateType;
  private selectedTab = 0;
  existingFeedback:FeedbackType[];
  selectedSkills = new Array();
  starSelected:boolean = false;
  newCandidate:boolean = false;
  
  isFeedbackSubmitted:boolean = false;
  selectedStage:number= 0;
  maxStage:number =80;
  existingCandidate:boolean = false;
  feedbackSubscription:Subscription;
  constructor(private _route:ActivatedRoute,private route:Router
    ,private _candService:CandidateService
    ) {
   
  }
  ngOnInit(){
    this.feedbackSubscription=this._candService.currentMessage.subscribe((data)=>{
      if(!!data.sno && data.isExisting){
        this.existingCandidate = true;
        if(!!data.level){
        this.maxStage = Levels[data.level]; 
        }
       this.getCandidateDetails(data.sno);
       this.getCandidateFeedback(data.sno);
      }
      else
      {
        this.newCandidate = true;
        this.existingCandidate = false;
        this.selectedStage =100;
      }
    });
    const stageInit = interval(500) ;
    this.intervalSubscription = stageInit.subscribe(()=> {
      if(this.selectedStage>= this.maxStage)
      {
      }
      else{
        this.selectedStage+=20;
      }
    });
  }
  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
    this.feedbackSubscription.unsubscribe();
  }

 
  checkValidity(f:Form)
  {
    return true;
  }

  getCandidateDetails(userId:number)
  {
      this._candService.getCandidates().subscribe((data)=>{
        this.candidateLists =data;
        this.candidate = this.candidateLists.filter( x => x.sno == userId)[0];
        this.selectedSkills = this.candidate.skills.split(',');
      });
      
  }

  getCandidateFeedback(userId:number){
    this._candService.getFeedback().subscribe((data)=>{
      this.feedbackLists = data;
      this.existingFeedback = this.feedbackLists.filter(x =>x.sno == userId);
    });
  }

  addCustomSkill = (term) => ({id: term, name: term});
}


