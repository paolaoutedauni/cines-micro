import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule
} from "@angular/material";

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
