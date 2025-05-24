import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Componente de formulario para crear y editar productos.
 * Utiliza Angular Material y Reactive Forms para la UI y validación.
 */
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditing = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Inicializa el formulario reactivo y carga el producto si es edición.
   */
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.productService.getProductById(+id).subscribe({
        next: (product) => this.productForm.patchValue(product),
        error: () => {
          this.snackBar.open('Producto no encontrado', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/products']);
        }
      });
    }
  }

  /**
   * Envía el formulario para crear o actualizar un producto.
   * Muestra feedback visual y redirige al listado tras la operación.
   */
  onSubmit(): void {
    if (this.productForm.invalid) return;
    this.loading = true;
    const product: Product = this.productForm.value;
    if (this.isEditing) {
      this.productService.updateProduct(product).subscribe({
        next: () => {
          this.snackBar.open('Producto actualizado', 'Cerrar', { duration: 2000 });
          this.router.navigate(['/products']);
        },
        error: (err) => this.snackBar.open(err.message, 'Cerrar', { duration: 3000 }),
        complete: () => this.loading = false
      });
    } else {
      this.productService.createProduct(product).subscribe({
        next: () => {
          this.snackBar.open('Producto creado', 'Cerrar', { duration: 2000 });
          this.router.navigate(['/products']);
        },
        error: (err) => this.snackBar.open(err.message, 'Cerrar', { duration: 3000 }),
        complete: () => this.loading = false
      });
    }
  }

  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get price() { return this.productForm.get('price'); }
  get quantity() { return this.productForm.get('quantity'); }
}
