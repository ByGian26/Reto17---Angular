import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from '../app-routing.module';
import { FiltroComponent } from './filtro/filtro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    VistaComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    NavComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    VistaComponent
  ]
})
export class PrincipalModule { }
