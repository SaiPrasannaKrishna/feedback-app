import {Component,Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-hiringtrack',
    templateUrl: './hiringtrack.component.html',
    styleUrls: ['./hiringtrack.component.css']
  })

export class HiringTrackComponent implements OnInit
{
    @Input('selectedstage') selectedStage;
    ngOnInit(){
    }
}