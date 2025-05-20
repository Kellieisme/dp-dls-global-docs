import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDetailPageComponent } from './resources-detail-page.component';

describe('ResourcesDetailPageComponent', () => {
  let component: ResourcesDetailPageComponent;
  let fixture: ComponentFixture<ResourcesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
