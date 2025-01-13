import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsTableComponent } from './investigations-table.component';

describe('InvestigationsTableComponent', () => {
  let component: InvestigationsTableComponent;
  let fixture: ComponentFixture<InvestigationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigationsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
