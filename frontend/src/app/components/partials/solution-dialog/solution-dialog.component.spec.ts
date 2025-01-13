import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDialogComponent } from './solution-dialog.component';

describe('SolutionDialogComponent', () => {
  let component: SolutionDialogComponent;
  let fixture: ComponentFixture<SolutionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
