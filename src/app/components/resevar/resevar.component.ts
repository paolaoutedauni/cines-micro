import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-resevar",
  templateUrl: "./resevar.component.html",
  styleUrls: ["./resevar.component.css"]
})
export class ResevarComponent implements OnInit {
  reservarForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private db: AngularFirestore
  ) {}

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
    let ordenesRef = this.db.collection("ordenes", ref =>
      ref.where("pelicula", "==", this.route.snapshot.paramMap.get("id"))
    );

    ordenesRef.get().subscribe(res => {
      const reservados = res.docs.reduce((acc: number, curr: any) => {
        acc += curr.data().cantidad;
        return acc;
      }, 0);
      if (
        reservados < 30 &&
        reservados + Number(this.reservarForm.value.entradas) <= 30
      ) {
        this.db
          .collection("ordenes")
          .add({
            cantidad: Number(this.reservarForm.value.entradas),
            email: this.reservarForm.value.email,
            fecha: new Date(),
            pelicula: this.route.snapshot.paramMap.get("id")
          })
          .then(res => {
            alert("Reserva exitosa");
            this.router.navigateByUrl("/home");
          });
      } else alert(`Solo hay ${30 - reservados} disponibles`);
    });
  }
}
