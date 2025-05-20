import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationsDetailPageComponent } from './foundations-detail-page.component';

describe('FoundationsDetailPageComponent', () => {
  let component: FoundationsDetailPageComponent;
  let fixture: ComponentFixture<FoundationsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundationsDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
