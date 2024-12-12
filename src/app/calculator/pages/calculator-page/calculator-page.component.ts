import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculator-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorPageComponent { }
