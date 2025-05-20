import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DevelopPageComponent} from './develop-page.component';

describe('DevelopPageComponent', () => {
  let component: DevelopPageComponent;
  let fixture: ComponentFixture<DevelopPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DevelopPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DevelopPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
