import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation, input } from '@angular/core';

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

  //* Input signals:
  public isCommandButton = input(false, {
    transform: (value: boolean | string) => typeof value == 'string' ? value == '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) => typeof value == 'string' ? value == '' : value
  });

  //* Host bindings:
  // @HostBinding('class.is-command-button') get CommandStyle() {
  //   return this.isCommandButton();
  // }

  @HostBinding('class.w-2/4') get CommandStyle() {
    return this.isDoubleSize();
  }
}
