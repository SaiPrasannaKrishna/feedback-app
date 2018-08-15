import {Component,Input, OnInit} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormControl, NgForm, Form } from '@angular/forms';
import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'app-candidatetrack',
    templateUrl: './candidatetrack.component.html',
    styleUrls: ['./candidatetrack.component.css']
  })

export class CandidateTrackComponent implements OnInit
{
    @Input('candidate') candidate;
    @Input('selectedstar') selectedStar;
    @Input('selectedskills') selectedSkills;

    ngOnInit(){
    }

    constructor(private snackBar:MatSnackBar){

    }

    skills=[
        {id:1,name:'JAVA'},
        {id:2,name:'C'},
        {id:3,name:'CPP'},
        {id:4,name:'JAVASCRIPT'},
        {id:5,name:'BIGDATA'},
        {id:6,name:'RPA'},
        {id:7,name:'CSS'},
        {id:8,name:'HTML'},
        {id:9,name:'FRONTENDDEV'},
        {id:10,name:'C#'},
        {id:11,name:'DOT NET'},
        {id:12,name:'UIPATH'},
        {id:13,name:'UX/UI'},
        {id:14,name:'Excel'},
        {id:15,name:'PDF'},
        {id:16,name:'Selenium'},
        {id:17,name:'Cloud'},
        {id:18,name:'AI'},
      ]
      submitCandidate(f:NgForm){
        this.snackBar.open(`Success!`,'',{
          duration:1000 ,
        });
      }
}