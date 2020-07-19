import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './lead/home/home.component';
import { FavoriteComponent } from './lead/favorite/favorite.component';
import { ResultComponent } from './lead/result/result.component';
import { ErrorComponent } from './lead/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '/favorites', component: FavoriteComponent },
  { path: 'result/:city', component: ResultComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
