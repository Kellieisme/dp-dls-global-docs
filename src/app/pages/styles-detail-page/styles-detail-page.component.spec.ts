import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesDetailPageComponent } from './styles-detail-page.component';

describe('StylesDetailPageComponent', () => {
  let component: StylesDetailPageComponent;
  let fixture: ComponentFixture<StylesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylesDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
