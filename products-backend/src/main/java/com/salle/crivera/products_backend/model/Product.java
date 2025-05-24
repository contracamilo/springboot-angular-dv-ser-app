package com.salle.crivera.products_backend.model;

import jakarta.persistence.*;

/**
 * Entidad JPA que representa un producto en la base de datos.
 * Contiene los atributos principales de un producto y sus métodos de acceso.
 */
@Entity
@Table(name = "products")
public class Product {
    /** Identificador único del producto (clave primaria, autogenerada) */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Nombre del producto (no puede ser nulo) */
    @Column(nullable = false)
    private String name;

    /** Descripción del producto (no puede ser nulo) */
    @Column(nullable = false)
    private String description;

    /** Precio del producto (no puede ser nulo) */
    @Column(nullable = false)
    private Double price;

    /** Cantidad disponible en inventario (no puede ser nulo) */
    @Column(nullable = false)
    private Integer quantity;

    /** Constructor vacío requerido por JPA */
    public Product() {}

    /**
     * Constructor completo para crear un producto con todos sus atributos.
     */
    public Product(Long id, String name, String description, Double price, Integer quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    // Métodos getter y setter para cada propiedad
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
} 