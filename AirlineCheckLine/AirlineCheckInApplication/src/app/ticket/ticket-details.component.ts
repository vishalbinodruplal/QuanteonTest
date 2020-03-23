import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/data-service.service';
import { IUserDetails } from '../api_response_template/user-details';
import { IFlightDetails } from '../api_response_template/flight-details';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  cnfNumber: String;
  userData : IUserDetails[];
  flightDetails: IFlightDetails;
  errorMessage : String;
  checked: string;

  disp: String[];
  dataSource: any;
  data: any;
  seatNoArray: String = '';
  stat: String = '';

  constructor(private route: ActivatedRoute, private router: Router,
    private getDataService : GetDataService) { 
    this.cnfNumber = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.cnfNumber);

    if(this.cnfNumber!=""){
      this.getDataService.getFlightDetails(this.cnfNumber).subscribe({
          next: flightDetails => {
            this.flightDetails = flightDetails;
            console.log("&&&&&&&& " + JSON.stringify(this.flightDetails));
          },
          error: err => this.errorMessage = err
      });
    }
    
    if(this.cnfNumber!=""){
      this.getDataService.getPassengerDetails(this.cnfNumber).subscribe({
        next: userData => {
          this.userData = userData;
          console.log("&&&&&&&& " + JSON.stringify(this.userData));
          this.data = Object.assign(this.userData);
          this.dataSource = new MatTableDataSource<IUserDetails>(this.userData);
        },
        error: err => this.errorMessage = err
    });
    }
  }

  displayedColumns: string[] = ['select', 'firstName', 'age', 'seatNo', 'checkedInStatus'];
  errorMessagePass: string;
  selection = new SelectionModel<IUserDetails>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => 
          this.selection.select(row)
          );
  }

  checkIn(): void {
    localStorage.setItem('cnfno', this.cnfNumber+"");
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(item.seatNo);

      this.seatNoArray = this.seatNoArray + item.seatNo + ',';

    });
    localStorage.setItem('checkIn', this.seatNoArray+"");
    if(this.seatNoArray+""!=""){
      console.log('success');
      this.router.navigate(['/safety-insts']);
    } else {
      console.log('fail');
    }
    this.selection = new SelectionModel<IUserDetails>(true, []);
  }

}