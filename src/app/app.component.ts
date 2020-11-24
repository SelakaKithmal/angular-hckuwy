import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 6";
  form: FormGroup;
  businesses = [{ name: "one", id: 0 }, { name: "two", id: 1 }];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  createItem() {
    return this.fb.group({
      name: ["Jon"]
    });
  }

  addNext() {
    (this.form.controls["items"] as FormArray).push(this.createItem());
  }
}
