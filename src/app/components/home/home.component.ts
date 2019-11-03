import { Component, OnInit } from "@angular/core";
import { PeliculaService } from "src/app/services/pelicula.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peliculaService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  filtrarPeliculas(filtro) {
    this.filteredMovies = this.movies.filter(movie =>
      movie.Title.toLowerCase().includes(filtro.target.value.toLowerCase())
    );
  }

  goToDetails(movie) {
    this.router.navigate(["/movie", movie.Id]);
  }
}
