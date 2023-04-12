import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    // Get input value and remove all non-numeric characters
    let input = event.target.value.replace(/\D/g, '');

    // Trim the remaining input to 11 characters
    input = input.substring(0, 11);

    // Format the phone number
    let formattedInput = '';
    if (input.length > 1) {
      formattedInput = '+7 ';
      formattedInput += input.substring(1, 4) + ' ';
      if (input.length > 4) {
        formattedInput += input.substring(4, 7) + ' ';
        if (input.length > 7) {
          formattedInput += input.substring(7, 9) + ' ' + input.substring(9);
        } else {
          formattedInput += input.substring(7);
        }
      } else {
        formattedInput += input.substring(4);
      }
    } else {
      formattedInput = input;
    }
    // Set the input value with the formatted phone number
    if (event.inputType === 'deleteContentBackward') {
      event.target.value = formattedInput.substring(
        0,
        formattedInput.length - 1
      );
    } else {
      event.target.value = formattedInput;
    }
  }
}
