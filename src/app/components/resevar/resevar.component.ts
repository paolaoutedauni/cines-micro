import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-resevar",
  templateUrl: "./resevar.component.html",
  styleUrls: ["./resevar.component.css"]
})
export class ResevarComponent implements OnInit {
  reservarForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reservarForm = this.formBuilder.group({
      entradas: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.reservarForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reservarForm.invalid) {
      return;
    }
    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.reservarForm.value, null, 4)
    );
  }
}
