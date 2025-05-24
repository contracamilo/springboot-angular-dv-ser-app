package com.salle.crivera.products_backend.controller;

import com.salle.crivera.products_backend.model.Product;
import com.salle.crivera.products_backend.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controlador REST que expone los endpoints para la gestión de productos.
 * Utiliza ProductService para la lógica de negocio.
 */
@RestController
@RequestMapping("/api/products")
@Tag(name = "Products", description = "Product management API")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    /** Servicio de productos inyectado */
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * Endpoint para obtener todos los productos.
     * GET /api/products
     */
    @GetMapping
    @Operation(summary = "Get all products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    /**
     * Endpoint para obtener un producto por su ID.
     * GET /api/products/{id}
     */
    @GetMapping("/{id}")
    @Operation(summary = "Get product by ID")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    /**
     * Endpoint para crear un nuevo producto.
     * POST /api/products
     */
    @PostMapping
    @Operation(summary = "Create a new product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product created = productService.createProduct(product);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    /**
     * Endpoint para actualizar un producto existente.
     * PUT /api/products/{id}
     */
    @PutMapping("/{id}")
    @Operation(summary = "Update an existing product")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    /**
     * Endpoint para eliminar un producto por su ID.
     * DELETE /api/products/{id}
     */
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a product")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
} 