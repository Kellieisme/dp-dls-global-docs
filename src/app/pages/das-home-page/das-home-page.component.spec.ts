import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DasHomePageComponent} from './das-home-page.component';

describe('DasHomePageComponent', () => {
  let component: DasHomePageComponent;
  let fixture: ComponentFixture<DasHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
