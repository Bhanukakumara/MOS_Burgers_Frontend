import { Component } from '@angular/core';
import { Customer } from '../../../models/customer';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  customer: Customer = {
    customerId: '',  // This can be auto-generated or handled by backend
    name: '',
    contactNumber: '',
    email: '',
    address: ''
  };

  // Dummy method to simulate adding a customer (replace with actual logic)
  onSubmit(): void {
    console.log('Customer Added:', this.customer);
    // You would call a service here to save the customer to the backend
  }
}
