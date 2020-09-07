import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




//Rutas
import { APP_ROUTING } from './app.routes';




//Servicios
import { HeroesService } from './servicios/heroes.service';



//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    RouterModule,
    CommonModule 
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
