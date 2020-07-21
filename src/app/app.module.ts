import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './lead/main/main.component';
import { FavoriteComponent } from './lead/favorite/favorite.component';

import { ErrorComponent } from './lead/error/error.component';
import { SearchComponent } from './lead/main/search/search.component';
import { ForecastComponent } from './lead/main/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoriteComponent,
    ErrorComponent,
    SearchComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
