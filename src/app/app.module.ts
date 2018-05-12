import { HttpClientModule } from '@angular/common/http';
import { FipeApiService } from './fipe-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModelosComponent } from './modelos/modelos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [FipeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
