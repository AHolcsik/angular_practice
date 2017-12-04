import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent
      ],
    }).compileComponents();
  }));

  it('should render button', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('click me!');
  }));
});
