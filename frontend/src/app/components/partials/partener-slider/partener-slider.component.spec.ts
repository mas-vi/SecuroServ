import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerSliderComponent } from './partener-slider.component';

describe('PartenerSliderComponent', () => {
  let component: PartenerSliderComponent;
  let fixture: ComponentFixture<PartenerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenerSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
