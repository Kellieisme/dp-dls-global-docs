import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DasFooterComponent} from './das-footer.component';

describe('DasFooterComponent', () => {
  let component: DasFooterComponent;
  let fixture: ComponentFixture<DasFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DasFooterComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DasFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
