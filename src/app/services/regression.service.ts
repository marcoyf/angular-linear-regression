import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const regressionUrl = environment.regressionUrl;

@Injectable({
  providedIn: 'root'
})
export class RegressionService {

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${regressionUrl}/${url}`).pipe(
      tap(value => {
        console.log(value);
      })
    );
  }
}
