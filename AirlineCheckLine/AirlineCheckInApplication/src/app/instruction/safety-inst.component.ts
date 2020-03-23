import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/data-service.service';

@Component({
  selector: 'app-safety-inst',
  templateUrl: './safety-inst.component.html',
  styleUrls: ['./safety-inst.component.css']
})
export class SafetyInstComponent implements OnInit {
  checked = false;
  checkIn: String;
  errorMessage : String;

  constructor(private router: Router,
    private getDataService : GetDataService) { }

  ngOnInit() {
  }

  performCheckIn(): void {
    let cnfNumber = localStorage.getItem('cnfno');
    let stringToSplit = localStorage.getItem('checkIn').substring(0, localStorage.getItem('checkIn').length-1);
    let x = stringToSplit.split(",");
    x.forEach(item => {
      console.log('SeatNo = ' + item + '  CfnNo =  ' + cnfNumber);
      this.getDataService.doCheckIn(cnfNumber, item).subscribe({
              error: err => this.errorMessage = err,
              complete: () => {
                this.router.navigate(['/boarding-pass']);
              }
      });
    });
  }

}
