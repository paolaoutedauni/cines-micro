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
  moviesAvailables: any[] = [];
  moviesComingSoon: any[] = [];
  filteredMovies: any[] = [];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peliculaService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
      this.moviesAvailables = data;
      this.moviesComingSoon = data;
      this.availableMovies();
      this.comingSoonMovies();
    
    });
  }

  availableMovies(){
    this.moviesAvailables = this.movies.filter((movie) => movie.Available);
    this.filteredMovies = this.moviesAvailables;
  }

  comingSoonMovies(){
    this.moviesComingSoon = this.movies.filter((movie) => movie.ComingSoon);
  }

  filtrarPeliculas(filtro) {
    this.filteredMovies = this.moviesAvailables.filter(movie =>
      movie.Title.toLowerCase().includes(filtro.target.value.toLowerCase())
    );
  }

  goToDetails(movie) {
    this.router.navigate(["/movie", movie.Id]);
  }
}
