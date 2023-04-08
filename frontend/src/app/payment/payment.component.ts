import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm = this.fb.group({
    name: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
    expirationDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\\/\\d{2}')]],
    cvv: ['', [Validators.required, Validators.pattern('\\d{3}')]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.paymentForm.valid) {
      // submit payment form
    }
  }
}
