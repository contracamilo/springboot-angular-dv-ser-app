package com.salle.crivera.products_backend.service;

import com.salle.crivera.products_backend.model.Product;
import java.util.List;

/**
 * Interfaz que define la lógica de negocio para la gestión de productos.
 */
public interface ProductService {
    /** Obtiene la lista de todos los productos */
    List<Product> getAllProducts();
    /** Obtiene un producto por su ID */
    Product getProductById(Long id);
    /** Crea un nuevo producto */
    Product createProduct(Product product);
    /** Actualiza un producto existente */
    Product updateProduct(Long id, Product product);
    /** Elimina un producto por su ID */
    void deleteProduct(Long id);
} 