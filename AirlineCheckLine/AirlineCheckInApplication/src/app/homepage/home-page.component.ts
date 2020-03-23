import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from '../service/data-service.service';
import { IUserDetails } from '../api_response_template/user-details';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  formTitle: string = "Please Enter Below Details";
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userData : IUserDetails[];
  errorMessage : String;
  cnfNumber: String;
  lstName: String;
  emailid: String;
  contactNo: string;
  pass: IUserDetails[];
  flag1: Boolean = false;
  flag2: Boolean = false;
  flag3: Boolean = false;
  flag4: Boolean = false;

  constructor(private getDataService : GetDataService,
    private router: Router) { }

  ngOnInit() {
  }

  evaluateDetails(): void{
    console.log(this.cnfNumber);

    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this.flag4 = false;

    if(this.cnfNumber!=""){
      this.getDataService.getPassengerDetails(this.cnfNumber).subscribe({
        next: userData => {
          this.userData = userData;

          this.userData.forEach(
            u => {
              if(this.lstName==u.lastName+""){
                if(this.emailid==u.email){
                    console.log('Sucess');
                    this.flag1 = true;
                }
              }
            }
          );
          
            if(this.flag1){
            this.userData.forEach(
              u => {
                if(u.checkedInStatus==false)
                  this.flag3 = true;
              }
            );
          }

          console.log('bbbbb = ' + this.flag3 + ' falg4 = ' + this.flag4);
          if(this.flag3 == true){
            this.userData.forEach(
              u => {
                if(this.lstName==u.lastName+""){
                  if(this.emailid==u.email){
                      this.router.navigate(['/ticket-details/', this.cnfNumber]);
                      console.log('flag = ' + this.flag1);
                  }
                }
              }
            );
          }
          if(this.flag1==false)
            this.flag2 = true;
          if(this.flag1==true && this.flag3==false)
            this.flag4 = true;
        },
        error: err => this.errorMessage = err
    });
  }
  }

}
