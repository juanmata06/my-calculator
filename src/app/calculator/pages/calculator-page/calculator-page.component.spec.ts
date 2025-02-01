import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorPageComponent from './calculator-page.component';

describe('CalculatorPageComponent', () => {

  let fixture: ComponentFixture<CalculatorPageComponent>;
  let compiled: HTMLElement;
  let component: CalculatorPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorPageComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain calculator app-calculator component', () => {
    expect(compiled.querySelector('app-calculator')).not.toBeNull();
  });

  it('should contain basic css classes', () => {
    const componentContainer = compiled.querySelector('div');
    expect(componentContainer).not.toBeNull();

    const containerMandatoryClasses: string[] = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ');
    const currentContainerClasses: string[] = componentContainer?.classList.value.split(' ')!;

    containerMandatoryClasses.forEach((className: string) => {
      expect(currentContainerClasses).toContain(className)
    });
  });
});