import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {
  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * General vars for component
   * ------------------------------------------------------------------------------------------------------------------------------
   */
  public buttons = viewChildren(ButtonComponent);


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
  public handleClick(key: string): void {
    console.log({ key: key });
  }

  // The way it used to be done before use host: @HostListener('document:keyup', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    const keyValue = event.key;
    
    const keyEquivalents: Record <string, string> = {
      'Escape': 'C',
      'Clear': 'C',
      'c': 'C',
      '*': 'x',
      'X': 'x',
      '/': '÷',
      'Enter': '=',
    }
    
    this.handleClick(keyEquivalents[keyValue] || keyValue);

    this.buttons().forEach(button => {
      button.buttonPressStyling(keyEquivalents[keyValue] || keyValue);
    });
  }

  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * PUBLIC VALIDATION AND INTERNAL PROCESS METHODS
   * ------------------------------------------------------------------------------------------------------------------------------
   */
}

