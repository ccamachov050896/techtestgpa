import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})

export class StudentService {
  formData: Student;
  list: Student[];
  student : string;
  mark: number;
  // datatest:string;
  constructor(private http: HttpClient) {}
  postStudent(formData: Student) {
    return this.http.post("http://localhost:3000/student", formData);
  }
  getStudent() {
    this.http
      .get("http://localhost:3000/student")
      .toPromise()
      .then(res => (this.list = res as Student[]));
      
  }

  
  
  putStudent(formData: Student) {
    debugger;
    return this.http.put(
      "http://localhost:3000/student/" + formData.id,
      formData
    );
  }

  deleteStudent(id) {
    return this.http.delete("http://localhost:3000/student/" + id);
  }
}
