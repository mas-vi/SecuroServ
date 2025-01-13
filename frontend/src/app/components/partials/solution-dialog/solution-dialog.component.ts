import { Component, inject, OnInit } from '@angular/core';
import { ResponseDialogComponent } from '../response-dialog/response-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solution-dialog',
  imports: [CommonModule],
  templateUrl: './solution-dialog.component.html',
  styleUrl: './solution-dialog.component.scss'
})
export class SolutionDialogComponent implements OnInit {
  dialogRef = inject(MatDialogRef<ResponseDialogComponent>);
  data = inject<any>(MAT_DIALOG_DATA);
  solution_name: string;
  solution_steps: string[];

  ngOnInit(): void {
     this.solution_name = this.data.solution_name;
    this.solution_steps = this.data.solution_steps.split("\\n");
  }

  onNoclick(): void {
    this.dialogRef.close();
  }

}
