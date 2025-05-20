import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StylesPageComponent} from './styles-page.component';

describe('StylesPageComponent', () => {
  let component: StylesPageComponent;
  let fixture: ComponentFixture<StylesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StylesPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(StylesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
