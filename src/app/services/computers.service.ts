import { Injectable } from '@angular/core';
import { Computers } from '../models/computers';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  computers : Computers[];
  apiUrl = 'http://localhost:3000/computers';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type':'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  getAllComputers():Observable<Computers[]>{
    return this.http.get<Computers[]>(this.apiUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOneComputer(id: number): Observable<Computers> {
    return this.http.get<Computers>(this.apiUrl + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }

  addComputer(computer: Computers): Observable<Computers> {
    return this.http.post<Computers>(this.apiUrl ,computer, this.httpOptions).pipe(
    catchError(this.handleError)
    );
  }

  updateComputer(computer: Computers) {
    return this.http.put<Computers>(this.apiUrl + '/' + computer.id ,computer, this.httpOptions).pipe(
    catchError(this.handleError)
    );
  }

  deleteComputer(id: number): Observable<Computers> {
    return this.http.delete<Computers>(this.apiUrl + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
