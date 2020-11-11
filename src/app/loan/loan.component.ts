import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  bankLoan: any;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
  }

  onCalculateBankLoan(presentValue: number, noOfInstallments: number, bankName: string) {
    this.loanService.getData(`/presentValue/${presentValue}/noOfInstallments/${noOfInstallments}/bankName/${bankName}`)
    .subscribe(data => {
      this.bankLoan = data;
    });
  }

}
