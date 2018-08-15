import {Component,Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-interviewertrack',
    templateUrl: './interviewertrack.component.html',
    styleUrls: ['./interviewertrack.component.css']
  })

export class InterviewerTrackComponent implements OnInit
{
    @Input('i') iForm : NgForm
    ngOnInit(){
    }

    constructor(private snackBar:MatSnackBar){

    }
    submitInterviewer(f:NgForm){
        this.snackBar.open(`Success!`,'',{
            duration:1000 ,
          });
    }
}