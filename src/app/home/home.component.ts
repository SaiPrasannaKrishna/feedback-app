import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort} from '@angular/material';
import { CandidateType } from '../interfaces/candidateType';
import { candidateList } from '../datalayer/candidates';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  searchValue:string;
  filterType:string;
  filteredCandidates:CandidateType[];
  constructor(private route:Router,private activateroute:ActivatedRoute
  ,private _custSer:CandidateService) {
    if(!!this.activateroute){ 
    this.activateroute.params.subscribe( (params) => {
      this.searchValue = params.value;
      this.filterType = params.filtertype;
      if(!!this.searchValue && !!this.filterType)
      {
      if(this.searchValue.length > 0 && this.filterType.length > 0)
      {
        this.filterCandidates(this.searchValue,this.filterType);
      }
      }
    });
    }
   
  }
  
  displayedColumns : string[] = ['sno','name','skills','level','entity','InterviewDate'];
  dataSource = new MatTableDataSource<CandidateType>(candidateList);
  @ViewChild(MatSort) sort: MatSort;
  date = Date.now();

  ngOnInit(){
    this.dataSource.sort = this.sort;
  }

  login(){
    alert('asfasfasf');
  }
  logoff(){
    this.route.navigate(['login']);
  }
  home(){
    this.route.navigate(['home']);
  }

  existingCandidate(row){
    this._custSer.navigateCandidate({sno:row.sno,level:row.level,isExisting:true});
    this.route.navigate(['/dashboard/feedback']);
  }

  filterCandidates(searchValue,filterType) : CandidateType[]
  {
    if(filterType == undefined || filterType.length == 0)
    {
      this.dataSource = new MatTableDataSource<CandidateType>(candidateList);
      return candidateList;
    }
    else
    {
      let s;
      switch(filterType)
      {
        case 'name':
          s = candidateList.filter(obj => obj.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
          break;
        case 'entity':
          s = candidateList.filter(obj => obj.entity.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
          break;
        case 'skills':
          s = candidateList.filter(obj => obj.skills.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
          break;
        case 'level':
          s = candidateList.filter(obj => obj.level.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
          break;
      } 
      if(s.length == 0)
      {
      }
      this.dataSource = new MatTableDataSource<CandidateType>(s);
    }
  }
}

