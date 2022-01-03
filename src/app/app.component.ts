import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  external: string;
  ownerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildFormControls();
    this.ownerForm.statusChanges.subscribe((state) => {
      console.log(state);
    });
  }

  /**
   * Construye el formulario de datos del propietario
   */
  buildFormControls(): void {
    this.ownerForm = this.fb.group({
      stock: ['', [Validators.required]],
      stock2: ['', [Validators.required]],
    });
  }
}
