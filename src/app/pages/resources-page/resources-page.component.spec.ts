import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ResourcesPageComponent} from './resources-page.component';

describe('ResourcesPageComponent', () => {
  let component: ResourcesPageComponent;
  let fixture: ComponentFixture<ResourcesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ResourcesPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResourcesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
