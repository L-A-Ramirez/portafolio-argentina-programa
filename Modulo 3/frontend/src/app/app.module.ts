import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSupComponent } from './components/barra-sup/barra-sup.component';
import { NavComponent } from './components/nav/nav.component';
import { PresentBannerComponent } from './components/present-banner/present-banner.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ExpComponent } from './components/exp/exp.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CarouselCertificateComponent } from './components/carousel-certificate/carousel-certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraSupComponent,
    NavComponent,
    PresentBannerComponent,
    InfoPersonalComponent,
    ExpComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    CarouselCertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
