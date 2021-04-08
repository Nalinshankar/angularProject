
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../tsclasses/transaction';


@Injectable({
   providedIn: 'root'
})
export class TransactionService {
   
   constructor(private http: HttpClient) { }

   addTransaction(transaction: Transaction) {
    }
}