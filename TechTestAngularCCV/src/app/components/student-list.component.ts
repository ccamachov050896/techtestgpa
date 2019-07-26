import { Component, OnInit } from "@angular/core";
import { StudentService } from '../service/student.service';
import { Student } from '../service/student.model';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],

})
export class StudentListComponent implements OnInit {
  namestudnt : string;
  constructor(
    private service: StudentService,
    private toaster: ToastrService
    
  ) {}

  ngOnInit() {
    this.service.getStudent();
  }
  getStudentByID(emp: Student) {
    
    this.service.formData = Object.assign({}, emp);
  }

  

  deleteStudent(id) {
    if (confirm("Are you sure you want to delete this record..?")) {
      this.service.deleteStudent(id).subscribe(res => {
        this.toaster.success("Record deleted success..", "Student Record");
        this.service.getStudent();
      });
    }
  }
}
