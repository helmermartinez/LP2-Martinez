import { Injectable } from '@angular/core';
import { Escuela, Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos : Alumno[];
  private escuelas : Escuela[];

  constructor() {

    this.escuelas=[
      {idescuela:1, nombre:'Ing.Sistema'},
      {idescuela:2, nombre:'Ing.Alimentos'},
      {idescuela:3, nombre:'Ing.Civil'},
    ];

    this.alumnos=[];
  }
    getEscuelas(){
      return this.escuelas;
    }
    getAlumnos(){
      return this.alumnos;
    }
    addAlumno(alumno : Alumno){
      this.alumnos.push(alumno);
    }

    nuevoAlumno() : Alumno{
      return {
        idalumno : 0,
        nombre : '',
        direccion : '',
        escuela : 0
        };
    }
  }

