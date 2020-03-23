package com.airlinecheckin.io.airlinecheckin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airlinecheckin.io.airlinecheckin.model.FlightDetails;
import com.airlinecheckin.io.airlinecheckin.service.FlightDetailsService;

@RestController
public class FlightDetailsController {

	@Autowired
	private FlightDetailsService flightDetailsService; 
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/flights/{confirmno}")
	public FlightDetails getFlightDetails(@PathVariable String confirmno){
		return flightDetailsService.getFlightDetails(confirmno);
	}
	
}