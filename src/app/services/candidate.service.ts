import { Injectable } from "@angular/core";
import { CandidateType } from "../interfaces/candidateType";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { FeedbackType } from "../interfaces/feedbackType";
import { BehaviorSubject } from 'rxjs';
import { SearchQueryType } from "../interfaces/searchQueryType";

@Injectable()
export class CandidateService {

    private messageBus = new BehaviorSubject<SearchQueryType>({ sno:0,level:'Level0',isExisting:false});
    currentMessage = this.messageBus.asObservable();


    constructor(private _http:HttpClient){

    }

    getCandidates():Observable<CandidateType[]>
    {
        return this._http.get<CandidateType[]>('/assets/candidates.json');
    }
    getFeedback():Observable<FeedbackType[]>{
        return this._http.get<FeedbackType[]>('/assets/feedbackLists.json');
    }
    navigateCandidate(data:SearchQueryType){
        this.messageBus.next(data);
    }
}