import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DasFooterComponent} from './das-footer.component';

describe('DasFooterComponent', () => {
  let component: DasFooterComponent;
  let fixture: ComponentFixture<DasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
