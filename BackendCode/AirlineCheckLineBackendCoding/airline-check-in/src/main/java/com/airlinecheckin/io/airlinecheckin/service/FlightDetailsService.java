package com.airlinecheckin.io.airlinecheckin.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.airlinecheckin.io.airlinecheckin.model.FlightDetails;

@Service
public class FlightDetailsService {
	
	private List<FlightDetails> flightDetails = new ArrayList<>(Arrays.asList(
			new FlightDetails("123456", "SCA-127", "PUNE", "NAGPUR"),
			new FlightDetails("987654", "IN-133", "NAGPUR", "PATNA")
			));
	
	public FlightDetails getFlightDetails(String confirmationNo){
		return flightDetails.stream().filter(t -> t.getConfirmationNo().equals(confirmationNo)).findFirst().get();
	}

}