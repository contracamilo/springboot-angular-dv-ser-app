import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

/**
 * Diálogo de confirmación reutilizable usando Angular Material Dialog.
 * Recibe mensaje y textos de botones por inyección de datos.
 */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string; buttonText?: { ok: string; cancel: string }; buttonColor?: { ok: string } }
  ) {}

  /**
   * Cierra el diálogo indicando cancelación.
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }

  /**
   * Cierra el diálogo indicando confirmación.
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
