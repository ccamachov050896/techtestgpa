import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StudentsComponent } from '../app/components/students.component'

import { StudentListComponent } from '../app/components/student-list.component'

import { StudentComponent } from "../app/components/student.component";

import { StudentService } from "./service/student.service";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { FilterPipe } from '../app/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    
    StudentsComponent,
        
    StudentListComponent,
        
    StudentComponent,
    
    FilterPipe,
    


     
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    HttpClientModule,
       
   BrowserAnimationsModule,
       
   ToastrModule.forRoot(), 
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
