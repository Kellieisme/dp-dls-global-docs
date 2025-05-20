import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ComponentsPageComponent} from './components-page.component';

describe('ComponentsPageComponent', () => {
  let component: ComponentsPageComponent;
  let fixture: ComponentFixture<ComponentsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ComponentsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
