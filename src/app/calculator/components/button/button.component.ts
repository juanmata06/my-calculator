import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  }
})
export class ButtonComponent{

  public isCommandButton = input(false, {
    transform: (value: boolean | string) => typeof value == 'string' ? value == '' : value
  });

  @HostBinding('class.bg-indigo-700') get CommandStyle() {
    return this.isCommandButton();
  }
}
