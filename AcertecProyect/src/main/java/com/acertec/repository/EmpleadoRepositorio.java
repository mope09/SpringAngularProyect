package com.acertec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acertec.entity.Empleado;

public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer>{
	
	 public Empleado findByNombre(String nombre);

}
