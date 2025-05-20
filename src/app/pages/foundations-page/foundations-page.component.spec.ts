import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FoundationsPageComponent} from './foundations-page.component';

describe('FoundationsPageComponent', () => {
  let component: FoundationsPageComponent;
  let fixture: ComponentFixture<FoundationsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FoundationsPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FoundationsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
