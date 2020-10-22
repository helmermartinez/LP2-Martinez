import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componets/alumnos/alumno/alumno.component';
import { AlumnoService } from './services/alumno.service';
import { FormsModule } from '@angular/forms';
import { ListarAlumnoComponent } from './componets/alumnos/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
