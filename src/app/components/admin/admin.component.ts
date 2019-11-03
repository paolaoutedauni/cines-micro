import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

export interface Orden {
  id: number;
  pelicula: string;
  correo: string;
  cantidad: number;
  fecha: string;
}

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
          const obj: any = { ...doc.data(), id: doc.id };
          ordenes.push(obj);
          console.log(obj);
        });
        this.dataSource = ordenes;
      });
  }
}
