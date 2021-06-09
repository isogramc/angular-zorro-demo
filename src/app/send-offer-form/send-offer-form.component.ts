import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-send-offer-form',
  templateUrl: './send-offer-form.component.html',
  styleUrls: ['./send-offer-form.component.css']
})
export class SendOfferFormComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      amount: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(this.validateForm.value);
    if(this.validateForm.value!=={}) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {}


}
