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
  businesses = [
    { name: "one", id: 0 },
    { name: "two", id: 1 },
    { name: "three", id: 2 }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
    this.onChanges();
  }

  createItem() {
    return this.fb.group({
      name: ["Jon"]
    });
  }

  onChanges(): void {
    this.form.get("items").valueChanges.subscribe(value => {
      this.businesses.push({
        name: value[0].name,
        id: Math.floor(Math.random() * 100 + 1)
      });
    });
  }
}
