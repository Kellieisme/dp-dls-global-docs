import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentDetailPageComponent} from './component-detail-page.component';

describe('ComponentDetailPageComponent', () => {
  let component: ComponentDetailPageComponent;
  let fixture: ComponentFixture<ComponentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
