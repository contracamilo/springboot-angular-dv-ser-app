package com.salle.crivera.products_backend.repository;

import com.salle.crivera.products_backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de acceso a datos para la entidad Product.
 * Hereda métodos CRUD de JpaRepository.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // No es necesario definir métodos, JpaRepository provee CRUD completo.
} 