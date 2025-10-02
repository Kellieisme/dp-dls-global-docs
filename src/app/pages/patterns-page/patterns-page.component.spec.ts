import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PatternsPageComponent} from './patterns-page.component';

describe('PatternsPageComponent', () => {
  let component: PatternsPageComponent;
  let fixture: ComponentFixture<PatternsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
