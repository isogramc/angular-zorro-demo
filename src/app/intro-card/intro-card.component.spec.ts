import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroCardComponent } from './intro-card.component';

describe('IntroCardComponent', () => {
  let component: IntroCardComponent;
  let fixture: ComponentFixture<IntroCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
