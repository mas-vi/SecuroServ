import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatsTableComponent } from './threats-table.component';

describe('ThreatsTableComponent', () => {
  let component: ThreatsTableComponent;
  let fixture: ComponentFixture<ThreatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
