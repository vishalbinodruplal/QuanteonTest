import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/data-service.service';
import { IUserDetails } from '../api_response_template/user-details';
import { IFlightDetails } from '../api_response_template/flight-details';

@Component({
  selector: 'app-boarding-pass',
  templateUrl: './boarding-pass.component.html',
  styleUrls: ['./boarding-pass.component.css']
})
export class BoardingPassComponent implements OnInit {
  userData : IUserDetails[];
  flightDetails: IFlightDetails;
  errorMessage : String;

  constructor(private router: Router,
    private getDataService : GetDataService) { }

  ngOnInit() {
    let cnfNumber = localStorage.getItem('cnfno');
    let stringToSplit = localStorage.getItem('checkIn').substring(0, localStorage.getItem('checkIn').length-1);
    
    console.log('SeatNo = ' + stringToSplit + '  CfnNo =  ' + cnfNumber);

    this.getDataService.getFlightDetails(cnfNumber).subscribe({
      next: flightDetails => {
        this.flightDetails = flightDetails;
        console.log("&&&&&&&& " + JSON.stringify(this.flightDetails));
      },
      error: err => this.errorMessage = err
    });

      console.log('SeatNo = ' + stringToSplit + '  CfnNo =  ' + cnfNumber);
      this.getDataService.getSelectedPassengerDetails(cnfNumber, stringToSplit+"").subscribe({
        next: userData => {
          this.userData = userData;
          console.log("&&&&&&&& " + JSON.stringify(this.userData));
        },
        error: err => this.errorMessage = err
    });

  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }

}
