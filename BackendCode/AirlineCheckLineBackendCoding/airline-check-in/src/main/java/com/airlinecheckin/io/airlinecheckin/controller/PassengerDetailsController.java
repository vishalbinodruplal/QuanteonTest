package com.airlinecheckin.io.airlinecheckin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airlinecheckin.io.airlinecheckin.model.PassengerDetails;
import com.airlinecheckin.io.airlinecheckin.service.PassengerDetailsService;

@RestController
public class PassengerDetailsController {

	@Autowired
	private PassengerDetailsService passengerDetailsService; 
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/passengers/{confirmno}")
	public List<PassengerDetails> getPassengerDetails(@PathVariable String confirmno){
		return passengerDetailsService.getPassengerDetails(confirmno);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/passengers/{confirmno}/{lstname}/{email}/{contact}")
	public List<PassengerDetails> getUserDetails(@PathVariable String confirmno){
		return passengerDetailsService.getPassengerDetails(confirmno);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/passengers/{confirmno}/{seatno}")
	public void getPerformCheckIn(@PathVariable String confirmno, @PathVariable String seatno){
		passengerDetailsService.doCheckIn(confirmno, seatno);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/selectedpassengers/{confirmno}/{seatno}")
	public List<PassengerDetails> getSelectedPassengerDetails(@PathVariable String confirmno, @PathVariable String seatno){
		return passengerDetailsService.getSelectedPassenger(confirmno, seatno);
	}
	
}
