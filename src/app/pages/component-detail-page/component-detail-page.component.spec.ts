import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ComponentDetailPageComponent} from './component-detail-page.component';

describe('ComponentDetailPageComponent', () => {
  let component: ComponentDetailPageComponent;
  let fixture: ComponentFixture<ComponentDetailPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComponentDetailPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ComponentDetailPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
