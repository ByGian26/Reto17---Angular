import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { FiltroComponent } from './principal/filtro/filtro.component';
import { HomeComponent } from './principal/home/home.component';
import { NosotrosComponent } from './principal/nosotros/nosotros.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'nosotros',component: NosotrosComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'vista',component: VistaComponent},
  {path:'vista/:id/filtro',component: FiltroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
