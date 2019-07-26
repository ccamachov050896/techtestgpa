import { Component, OnInit } from "@angular/core";
import { StudentService } from "../service/student.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Student } from "../service/student.model";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  constructor(
    private service: StudentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  search(){
    
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      Student: "",
      LnA: 0,
      Science: 0,
      SocialStds: 0,
      Math: 0
    };
  }
  onSubmit(form: NgForm) {
    debugger;
    if (form.value.id == null) this.InsertRecord(form);
    else this.updateRecord(form);
  }
  InsertRecord(form: NgForm) {
    this.service.postStudent(form.value).subscribe(res => {
      this.toastr.success("Student inserted", ":)");
      this.resetForm(form);
      this.service.getStudent();
    });
  }
  updateRecord(form: NgForm) {
    this.service.putStudent(form.value).subscribe(res => {
      this.toastr.success("Student updated", ":)");
      this.resetForm(form);
      this.service.getStudent();
    });
  }
}
