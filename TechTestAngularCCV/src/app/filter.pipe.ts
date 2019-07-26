import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any, mark: number, subject: string): any {
    if(term === undefined && mark === undefined) return employees
    if(term != undefined) return employees.filter(function(employee){
      return employee.Student.toLowerCase().includes(term.toLowerCase());
    })
    if(mark != undefined) 
    return employees.filter(function(employee){
      if(employee.LnA > mark || employee.Science > mark || employee.SocialStds > mark || employee.Math > mark){
        return employee;
      }
    })

  }

}