import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DevelopPageComponent} from './develop-page.component';

describe('DevelopPageComponent', () => {
  let component: DevelopPageComponent;
  let fixture: ComponentFixture<DevelopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
