import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SendOfferFormComponent } from './send-offer-form.component';

describe('SendOfferFormComponent', () => {
  let component: SendOfferFormComponent;
  let fixture: ComponentFixture<SendOfferFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOfferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
