import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-attack-dialog',
  imports: [],
  templateUrl: './attack-dialog.component.html',
  styleUrl: './attack-dialog.component.scss'
})
export class AttackDialogComponent implements OnInit{
  dialogRef = inject(MatDialogRef<AttackDialogComponent>);
  data = inject<any>(MAT_DIALOG_DATA);
  continent:string;
  country:string;
  ngOnInit(): void {
    this.continent = this.data.continent;
    this.country = this.data.country;
  }
  
  onNoclick(): void {
    this.dialogRef.close();
  }


}
