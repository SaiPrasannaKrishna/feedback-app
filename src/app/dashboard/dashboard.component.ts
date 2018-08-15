import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CandidateService } from '../services/candidate.service';

export interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isEnabled:true;
  constructor(private route:Router,private activateroute:ActivatedRoute
  ,private _custSer:CandidateService) {
    
  }
 
  ngOnInit() {
  }

  login(){
    alert('asfasfasf');
  }
  feedback(){
    this._custSer.navigateCandidate({sno:0,level:'Level0',isExisting:false});
    this.route.navigate(['/dashboard/feedback']);
    
  }
  logoff(){
    localStorage.removeItem('isLoggedIn');
    this.route.navigate(['login']);
  }
  dashboard(){
    this.route.navigate(['subdashboard']);
  }
  search(value,selected){
    this.route.navigate(['/dashboard/home',value,selected]);
  }
}
