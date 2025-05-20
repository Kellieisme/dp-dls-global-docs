import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PatternsPageComponent} from './patterns-page.component';

describe('PatternsPageComponent', () => {
  let component: PatternsPageComponent;
  let fixture: ComponentFixture<PatternsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PatternsPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PatternsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
