import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;

  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should render router-outlet wrapped in CSS classes', () => {
    const routerContainer = compiled.querySelector('div');
    expect(routerContainer).not.toBeNull();

    const containerMandatoryClasses: string[] = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');
    const currentContainerClasses: string[] = routerContainer?.classList.value.split(' ')!;

    containerMandatoryClasses.forEach((className: string) => {
      expect(currentContainerClasses).toContain(className)
    });
  });
});
