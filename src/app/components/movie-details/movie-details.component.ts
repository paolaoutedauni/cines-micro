import { Component, OnInit } from "@angular/core";
import { PeliculaService } from "src/app/services/pelicula.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Pelicula } from "../../models/pelicula";
import { AngularFirestore } from "@angular/fire/firestore";

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
    private peliculaService: PeliculaService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.movieId = id;

    this.db
      .collection("ordenes", ref => ref.where("pelicula", "==", this.movieId))
      .get()
      .subscribe(res => {
        this.reservas = res.docs.reduce((acc: number, curr: any) => {
          acc += curr.data().cantidad;
          return acc;
        }, 0);
        if (this.reservas >= 30) {
          this.disponible = false;
        }
      });
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
