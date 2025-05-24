import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Componente para mostrar el listado de productos.
 * Permite editar y eliminar productos usando Angular Material.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule,
    CurrencyPipe,
    MatProgressSpinnerModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'quantity', 'actions'];
  products: Product[] = [];
  loading = false;
  deletingId: number | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Carga todos los productos desde el servicio.
   */
  loadProducts(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: (products) => this.products = products,
      error: (err) => this.snackBar.open(err.message, 'Cerrar', { duration: 3000 }),
      complete: () => this.loading = false
    });
  }

  /**
   * Navega al formulario de edición para el producto seleccionado.
   */
  editProduct(product: Product): void {
    this.router.navigate(['/products/edit', product.id]);
  }

  /**
   * Abre el diálogo de confirmación y elimina el producto si se confirma.
   */
  deleteProduct(product: Product): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        message: `¿Eliminar "${product.name}"?`,
        buttonText: { ok: 'Eliminar', cancel: 'Cancelar' },
        buttonColor: { ok: 'warn' }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed && product.id) {
        this.deletingId = product.id;
        this.productService.deleteProduct(product.id).subscribe({
          next: () => {
            this.snackBar.open('Producto eliminado', 'Cerrar', { duration: 2000 });
            this.loadProducts();
          },
          error: (err) => this.snackBar.open(err.message, 'Cerrar', { duration: 3000 }),
          complete: () => this.deletingId = null
        });
      }
    });
  }
}
