import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MenuComponent} from '../menu/menu.component';

describe('AppComponent', () => {
  let fixture = null;
  let app = null;
  let compiled = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  afterEach(() => {
    compiled.remove();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'facebook'`, () => {
    expect(app.title).toEqual('facebook');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Facebook');
  });
});
