import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './lead/home/home.component';
import { FavoriteComponent } from './lead/favorite/favorite.component';
import { ResultComponent } from './lead/result/result.component';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './lead/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    ResultComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
