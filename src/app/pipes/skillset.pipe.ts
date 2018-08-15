import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'skillfilter'
})
export class SkillSetPipe implements PipeTransform{
    transform(value:string,length:number)
    {
     return value;
    }
}