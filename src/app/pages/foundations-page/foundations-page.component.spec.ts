import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FoundationsPageComponent} from './foundations-page.component';

describe('FoundationsPageComponent', () => {
  let component: FoundationsPageComponent;
  let fixture: ComponentFixture<FoundationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
