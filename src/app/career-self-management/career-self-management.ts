import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {  OnInit, ViewChild } from '@angular/core'; // Añadido OnInit, ViewChild
import {  MatTableDataSource } from '@angular/material/table'; // MatTableDataSource aquí
import { MatSort, MatSortModule } from '@angular/material/sort'; // MatSort aquí
import { MatIconModule } from '@angular/material/icon'; // Para los íconos (edit, delete, add)
import { MatButtonModule } from '@angular/material/button'; // Para los botones
import { MatFormFieldModule } from '@angular/material/form-field'; // Para el campo de búsqueda
import { MatInputModule } from '@angular/material/input';
export interface Carrera {
  id: number; 
  nombre: string;
  materias: number; // O podrías usar string
  descripcion: string;
  duracion: number; 
}

const DATOS_CARRERAS: Carrera[] = [
  {id: 1, nombre: 'Ing. Sistemas', materias: 40, descripcion: 'Análisis y desarrollo de software', duracion: 5},
  {id: 2, nombre: 'Arquitectura', materias: 35, descripcion: 'Diseño y construcción de espacios', duracion: 4},
  // ... más datos
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
