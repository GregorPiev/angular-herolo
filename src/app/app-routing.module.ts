import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './lead/main/main.component';
import { FavoriteComponent } from './lead/favorite/favorite.component';
import { ErrorComponent } from './lead/error/error.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
