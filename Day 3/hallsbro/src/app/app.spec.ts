import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // 1. Import provideRouter
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])] // 2. Add router providers for standalone components
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Trigger a data binding check to render the HTML
    
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // 3. Changed 'Hello, hallsbro' to 'Hello, halls' to match your app.ts signal
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, halls');
  });
});