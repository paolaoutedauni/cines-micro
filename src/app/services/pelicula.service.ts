import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PeliculaService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get("/assets/movies.json");
  }
}
