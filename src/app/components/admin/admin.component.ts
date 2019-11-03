import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

export interface Orden {
  id: number;
  correo: string;
  cantidad: number;
  fecha: string;
}

const ELEMENT_DATA: Orden[] = [
  { id: 1, correo: "kilordpepo@gmail.com", cantidad: 2, fecha: "02-11-2019" },
  { id: 2, correo: "carlospepo@msn.com", cantidad: 5, fecha: "01-11-2019" },
  { id: 3, correo: "paolaouteda@gmail.com", cantidad: 8, fecha: "12-10-2019" },
  { id: 4, correo: "piso213@gmail.com", cantidad: 1, fecha: "02-11-2019" }
];
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ["id", "correo", "cantidad", "fecha"];
  dataSource = ELEMENT_DATA;
  constructor(db: AngularFirestore) {}

  ngOnInit() {}
}
