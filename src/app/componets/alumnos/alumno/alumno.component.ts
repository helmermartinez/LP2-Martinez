import { Component, OnInit } from '@angular/core';
import { Alumno, Escuela } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumno:Alumno;
  escuelas:Escuela[];

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.alumno = this.alumnoService.nuevoAlumno();
    this.escuelas = this.alumnoService.getEscuelas();
  }

  nuevoAlumno():void{
    alert("Angular...!");
    this.alumnoService.addAlumno(this.alumno);
    this.alumno = this.alumnoService.nuevoAlumno();

  }

}
