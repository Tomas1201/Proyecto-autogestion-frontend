import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {  OnInit, ViewChild } from '@angular/core'; 
import {  MatTableDataSource } from '@angular/material/table'; 
import { MatSort, MatSortModule } from '@angular/material/sort'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
export interface Carrera {
  id: number; 
  nombre: string;
  materias: string; 
  descripcion: string;
  duracion: number; 
}

const DATOS_CARRERAS: Carrera[] = [
  {id: 1, nombre: 'Ing. Sistemas', materias: 'Ver Materias', descripcion: 'Análisis y desarrollo de software', duracion: 5},
  {id: 2, nombre: 'Arquitectura', materias: 'Ver Materias', descripcion: 'Diseño y construcción de espacios', duracion: 4},
  
];

@Component({
  selector: 'app-career-self-management',
  imports: [MatTableModule, 
    MatTableModule,
    MatSortModule,       
    MatButtonModule,     
    MatIconModule,       
    MatFormFieldModule,  
    MatInputModule],
  templateUrl: './career-self-management.html',
  styleUrl: './career-self-management.css',
})
export class CareerSelfManagement {
  displayedColumns: string[] = ['nombre', 'materias', 'descripcion', 'duracion', 'acciones'];

  
  dataSource = new MatTableDataSource(DATOS_CARRERAS);
  
  
  @ViewChild(MatSort) sort!: MatSort; 

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

 
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  agregarCarrera() {
    console.log('Abrir formulario para agregar');
  }

  editarCarrera(carrera: Carrera) {
    console.log('Editar:', carrera);
  }

  eliminarCarrera(id: number) {
    console.log('Eliminar ID:', id);
    
  }
}
