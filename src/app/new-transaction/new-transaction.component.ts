import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Transaction } from '../tsclasses/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  // new: FormGroup;
  // existing: FormGroup;
  userForm: any;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  generes: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  // valueData : string;


  @Input()
  transaction: Transaction = new Transaction();
  private refNumber: number;
  private customerNumber: number;
  private userName: string;
  private address: string;
  private phone: number;
  private amount: number;
  private currency: string;
  private bank: string;
  private accountNumber: string;
  private details: string;
  private region: string;

  constructor(private _formBuilder: FormBuilder, private transService: TransactionService) {
    this.amount = 0,
    this.region = '',
    this.details = '',
    this.accountNumber = '',
    this.bank = '',
    this.currency = '',
    this.phone = 0,
    this.userName = '',
    this.address = '',
    this.refNumber = 0,
    this.customerNumber = 0
  }
  submit(event: any) {
    this.transaction = new Transaction();
    this.transaction.userName = this.userName;
    this.transaction.refNumber = this.refNumber;
    this.transaction.customerNumber = this.customerNumber;
    this.transaction.address = this.address;
    this.transaction.phone = this.phone;
    this.transaction.amount = this.amount;
    this.transaction.currency = this.currency;
    this.transaction.bank = this.bank;
    this.transaction.accountNumber = this.accountNumber;
    this.transaction.details = this.details;
    this.transaction.region = this.region;
    console.log(this.transaction);
    // this.valueData = event.target.value;
    this.transService.addTransaction(this.transaction);

  }
  ngOnInit(): void {
  }

}
