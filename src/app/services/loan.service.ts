import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const loanUrl = environment.loanUrl;

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${loanUrl}/${url}`).pipe(
      tap(value => {
        console.log(value);
      })
    );
  }
}
