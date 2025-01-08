import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, ViewEncapsulation, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  }
})
export class ButtonComponent {
  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * General vars for component
   * ------------------------------------------------------------------------------------------------------------------------------
   */
  buttonValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  //* Input signals:
  public isCommandButton = input(false, {
    transform: (value: boolean | string) => typeof value == 'string' ? value == '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) => typeof value == 'string' ? value == '' : value
  });

  //* Output signals:
  public onClickButton = output<string>();

  //* Host bindings:
  // @HostBinding('class.is-command-button') get CommandStyle() {
  //   return this.isCommandButton();
  // }

  @HostBinding('class.w-2/4') get CommandStyle() {
    return this.isDoubleSize();
  }

  /**
   * -----------------------------------------------------------------------------------------------------------------------------
   * LYFECYCLE METHODS
   * -----------------------------------------------------------------------------------------------------------------------------
   */

  constructor() { }

  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * PRIVATE METHODS
   * ------------------------------------------------------------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * PRIVATE VALIDATION AND INTERNAL PROCESS METHODS
   * ------------------------------------------------------------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * PUBLIC METHODS
   * ------------------------------------------------------------------------------------------------------------------------------
   */
  public emitButtonValue(): void {
    if (!this.buttonValue()?.nativeElement) { return; }
    this.onClickButton.emit(this.buttonValue()!.nativeElement.innerText.trim());
  }

  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * PUBLIC VALIDATION AND INTERNAL PROCESS METHODS
   * ------------------------------------------------------------------------------------------------------------------------------
   */
}