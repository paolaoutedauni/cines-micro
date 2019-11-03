import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  movies: any[] = [];
  home: boolean;
  constructor() {
    this.home = window.location.pathname === "/home";
  }

  ngOnInit() {}
}
