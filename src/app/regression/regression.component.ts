import { Component, OnInit } from '@angular/core';
import { RegressionService } from '../services/regression.service';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.scss']
})
export class RegressionComponent implements OnInit {

  prediction: any;

  constructor(private regressionService: RegressionService) { }

  ngOnInit(): void {
  }

  onGetPricePrediction(houseSize: number, lotSize: number, bedrooms: number, granite: boolean, bathroom: boolean) {
    this.regressionService.getData(`/houseSize/${houseSize}/lotSize/${lotSize}/bedrooms/${bedrooms}/granite/${granite?1:0}/upgdBathroom/${bathroom?1:0}`)
    .subscribe(data => {
      this.prediction = data;
    });
  }

}
