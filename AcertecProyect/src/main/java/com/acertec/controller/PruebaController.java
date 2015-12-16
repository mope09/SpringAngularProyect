package com.acertec.controller;

import java.awt.print.Pageable;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.acertec.entity.Empleado;
import com.acertec.repository.EmpleadoRepositorio;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class PruebaController {
	
	@Autowired
	private EmpleadoRepositorio empleadoRepositorio;
	
	@CrossOrigin
	@RequestMapping(value = "/prueba", method = RequestMethod.GET, produces = "application/json")
	public String get_response(){
		
		List<Empleado> empleados = new ArrayList<Empleado>();
		
		empleados = empleadoRepositorio.findAll();
		String empleado = parseToJson(empleados);
		System.out.println(empleado);				
		return empleado;
	}
	
	public String parseToJson(List<Empleado> empleados) {
	   
	    ObjectMapper mapper = new ObjectMapper(); 
	    try {
			return  mapper.writeValueAsString(empleados);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    return null;
	}
		
	
	@CrossOrigin
	@RequestMapping(value = "/prueba", method = RequestMethod.POST)
	public ResponseEntity<Empleado> ingresarNuevoEmpleado(@RequestBody Empleado empleado) {
	  
	  empleadoRepositorio.save(empleado);
	    return new ResponseEntity<Empleado>(empleado, HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/prueba/{id}", method = RequestMethod.GET)
	public String actualizarEmpleado(@PathVariable("id") Empleado empleado) {
	  
	  System.out.println("Actualiza empleado");
	    return "";
	}
	

	


}
