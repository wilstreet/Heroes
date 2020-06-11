import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
