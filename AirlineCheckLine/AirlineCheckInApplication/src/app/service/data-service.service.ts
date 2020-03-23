import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUserDetails } from '../api_response_template/user-details';
import { IFlightDetails } from '../api_response_template/flight-details';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getPassengerDetails(_confirmationnumber: String): Observable<IUserDetails[]> {
    return this.http.get<IUserDetails[]>('http://localhost:8080/passengers/' + _confirmationnumber)
        .pipe(
            tap(data => console.log('All : ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
}

getFlightDetails(_confirmationnumber: String): Observable<IFlightDetails> {
  return this.http.get<IFlightDetails>('http://localhost:8080/flights/' + _confirmationnumber)
      .pipe(
          tap(data => console.log('All : ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
}

doCheckIn(_confirmationnumber: String, _seatno: String): Observable<IUserDetails[]> {
  return this.http.get<IUserDetails[]>('http://localhost:8080/passengers/' + _confirmationnumber + '/' + _seatno)
      .pipe(
          tap(data => console.log('All : ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
}

getSelectedPassengerDetails(_confirmationnumber: String, _seatno: String): Observable<IUserDetails[]> {
  return this.http.get<IUserDetails[]>('http://localhost:8080/selectedpassengers/' + _confirmationnumber + '/' + _seatno)
      .pipe(
          tap(data => console.log('All : ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
}

private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
