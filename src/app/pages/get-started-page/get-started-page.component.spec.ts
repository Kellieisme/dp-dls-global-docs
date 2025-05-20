import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {GetStartedPageComponent} from './get-started-page.component';

describe('GetStartedPageComponent', () => {
  let component: GetStartedPageComponent;
  let fixture: ComponentFixture<GetStartedPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GetStartedPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GetStartedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
