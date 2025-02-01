import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {
  /**
   * ------------------------------------------------------------------------------------------------------------------------------
   * General vars
   * ------------------------------------------------------------------------------------------------------------------------------
   */
  public buttons = viewChildren(ButtonComponent);
  private calculatorService = inject(CalculatorService);
  public resultText = computed(() => this.calculatorService.resultText());
  public lastResultText = computed(() => this.calculatorService.subResultText());
  public lastOperatorText = computed(() => this.calculatorService.lastOperator());


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
    this.calculatorService.constructNumber(key);
  }

  // The way it used to be done before use host: @HostListener('document:keyup', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    const keyValue = event.key;

    const keyEquivalents: Record<string, string> = {
      'Escape': 'C',
      'Clear': 'C',
      'X': '*',
      'x': '*',
      '/': '÷',
      'Enter': '=',
    };

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

