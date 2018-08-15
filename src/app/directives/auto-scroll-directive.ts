import {Directive, HostBinding, ElementRef,HostListener, Renderer} from '@angular/core';


@Directive({
    selector: "[autoScrollDirective]",  
})

export class AutoScrollDirective{

    constructor(private _e1:ElementRef,private r:Renderer){
        let height = this._e1.nativeElement.scrollHeight;
    }


    ngOnInit(){
        // Use renderer to render the emelemt with styles
    }
    

}

