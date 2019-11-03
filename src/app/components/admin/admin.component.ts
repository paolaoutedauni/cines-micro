import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Orden } from "../../models/orden";

const ELEMENT_DATA: Orden[] = [];
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ["id", "pelicula", "email", "cantidad", "fecha"];
  dataSource = ELEMENT_DATA;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection("ordenes")
      .get()
      .subscribe(data => {
        const ordenes: Orden[] = [];
        data.docs.map(doc => {
          const obj: Orden = {
            cantidad: doc.data().cantidad,
            email: doc.data().email,
            fecha: doc.data().fecha,
            pelicula: doc.data().pelicula,
            id: doc.id
          };
          ordenes.push(obj);
        });
        this.dataSource = ordenes;
      });
  }
}
