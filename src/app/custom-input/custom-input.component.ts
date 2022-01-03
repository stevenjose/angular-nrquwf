import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template:
    '<input (input)="changue($event)" name="one" [(ngModel)]="val" /> {{ val }}',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};
  val = '';
  val2 = '';

  setValue(val) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any) {
    this.setValue(value);
    console.log('writeValue', value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
    console.log('registerOnTouched');
  }

  changue($event): void {
    console.log('aca', $event.target.value);
    this.setValue($event.target.value);
  }
}
