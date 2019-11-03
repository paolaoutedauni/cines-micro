import { Component, OnInit } from "@angular/core";
import { PeliculaService } from "src/app/services/pelicula.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Pelicula } from "../../models/pelicula";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  public movieId;
  movies: Pelicula[] = [];
  movie: Pelicula = {
    Actors: "",
    Available: true,
    Awards: "",
    ComingSoon: false,
    Country: "",
    Director: "",
    Genre: [""],
    Id: "",
    Images: [],
    Language: "",
    Plot: "",
    Poster: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Title: "",
    Writer: "",
    Year: ""
  };
  disponible = true;
  reservas: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculaService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.movieId = id;
    this.peliculaService.getMovies().subscribe((data: Pelicula[]) => {
      this.movies = data;
      this.filtrarPeliculas();
    });
  }

  filtrarPeliculas() {
    this.movie = this.movies.filter(movie => movie.Id === this.movieId)[0];
  }

  reservar() {
    this.router.navigate(["/reservar", this.movie.Id]);
  }
}
