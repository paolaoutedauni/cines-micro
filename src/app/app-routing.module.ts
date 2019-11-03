import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "movie/:id", component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
