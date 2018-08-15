import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-existingcandidate',
  templateUrl: './existingcandidate.component.html',
  styleUrls: ['./existingcandidate.component.css']
})

export class ExistingCandidateComponent implements OnInit{

  @Input('existingfeedback') existingFeedback;
  
  
  ngOnInit()
  {
   
  }
}