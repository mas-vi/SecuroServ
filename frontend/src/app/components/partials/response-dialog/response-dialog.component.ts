import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-response-dialog',
  imports: [],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.scss'
})
export class ResponseDialogComponent implements OnInit {
    dialogRef = inject(MatDialogRef<ResponseDialogComponent>);
    data = inject<any>(MAT_DIALOG_DATA);
    time:string;
    team:string;
    ngOnInit(): void {
      console.log(this.data);
      this.time = this.data.time;
      this.team = this.data.team;
    }
    
    onNoclick(): void {
      this.dialogRef.close();
    }

}
