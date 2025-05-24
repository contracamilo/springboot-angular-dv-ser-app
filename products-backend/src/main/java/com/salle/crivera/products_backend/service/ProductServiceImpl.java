package com.salle.crivera.products_backend.service;

import com.salle.crivera.products_backend.model.Product;
import com.salle.crivera.products_backend.repository.ProductRepository;
import com.salle.crivera.products_backend.exception.ProductNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Implementación de la lógica de negocio para productos.
 * Orquesta las operaciones entre el controlador y el repositorio.
 */
@Service
public class ProductServiceImpl implements ProductService {
    /** Inyección del repositorio de productos */
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Devuelve todos los productos almacenados.
     */
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /**
     * Busca un producto por su ID. Lanza excepción si no existe.
     */
    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
    }

    /**
     * Crea y almacena un nuevo producto.
     */
    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    /**
     * Actualiza los datos de un producto existente.
     */
    @Override
    public Product updateProduct(Long id, Product productDetails) {
        Product product = getProductById(id);
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        return productRepository.save(product);
    }

    /**
     * Elimina un producto por su ID.
     */
    @Override
    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }
} 