import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarMainComponent } from './search-bar-main.component';

describe('SearchBarMainComponent', () => {
  let component: SearchBarMainComponent;
  let fixture: ComponentFixture<SearchBarMainComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
