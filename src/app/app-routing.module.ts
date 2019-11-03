import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "admin", component: AdminComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
