import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DasHomePageComponent} from './das-home-page.component';

describe('DasHomePageComponent', () => {
  let component: DasHomePageComponent;
  let fixture: ComponentFixture<DasHomePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DasHomePageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DasHomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
