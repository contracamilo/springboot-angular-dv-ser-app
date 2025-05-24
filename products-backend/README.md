# Products Backend

Este proyecto es una API RESTful para la gestión de productos, desarrollada con **Spring Boot**, **Spring Data JPA**, **H2** como base de datos en memoria y **Swagger/OpenAPI** para la documentación interactiva de los endpoints.

---

## 1. Requisitos previos

- **Java 21** o superior
- **Maven 3.9.x** o superior
- **Visual Studio Code** o tu IDE favorito

---

## 2. Arquitectura y buenas prácticas

- **POO y patrones:** El proyecto sigue principios de Programación Orientada a Objetos y aplica patrones como **Repository**, **Service** y **Controller** para una separación clara de responsabilidades.
- **Arquitectura en capas:**  
  - **Controller:** Expone los endpoints REST y gestiona las solicitudes HTTP.
  - **Service:** Contiene la lógica de negocio y orquesta las operaciones entre el controlador y el repositorio.
  - **Repository:** Acceso a datos usando Spring Data JPA.
  - **Model:** Entidades JPA que representan las tablas de la base de datos.
- **Documentación automática:** Todos los endpoints están documentados y pueden probarse desde Swagger UI.
- **Manejo de errores:** Se recomienda implementar un handler global de excepciones para respuestas claras y consistentes.

---

## 3. Estructura del proyecto

```text
products-backend/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/salle/crivera/products_backend/
│   │   │        ├── ProductsBackendApplication.java         # Clase principal de arranque
│   │   │        ├── model/
│   │   │        │    └── Product.java                      # Entidad JPA de producto
│   │   │        ├── repository/
│   │   │        │    └── ProductRepository.java            # Repositorio CRUD
│   │   │        ├── service/
│   │   │        │    ├── ProductService.java               # Interfaz de lógica de negocio
│   │   │        │    └── ProductServiceImpl.java           # Implementación de la lógica
│   │   │        └── controller/
│   │   │             └── ProductController.java            # Endpoints REST
│   │   └── resources/
│   │        └── application.properties                     # Configuración
│   └── test/
│        └── java/
│             └── com/salle/crivera/products_backend/
│                  └── ProductControllerTest.java
├── pom.xml
└── README.md
```

---

## 4. Explicación de las clases principales

### `Product`
Entidad JPA que representa un producto. Tiene atributos como `id`, `name`, `description`, `price` y `quantity`. Incluye constructores, getters y setters.

### `ProductRepository`
Interfaz que extiende `JpaRepository` para acceso CRUD a la entidad `Product`.

### `ProductService` y `ProductServiceImpl`
- **ProductService:** Interfaz que define la lógica de negocio para productos (listar, buscar, crear, actualizar, eliminar).
- **ProductServiceImpl:** Implementación concreta que usa el repositorio para acceder a los datos y aplica reglas de negocio.

### `ProductController`
Controlador REST que expone los endpoints para gestionar productos. Utiliza el servicio para la lógica y está documentado con Swagger/OpenAPI.

---

## 5. Configuración

El archivo `application.properties` configura la base de datos H2 y parámetros de JPA/Hibernate:

```properties
spring.application.name=products-backend

# H2 Database (persistente en archivo local)
spring.datasource.url=jdbc:h2:file:./db/products_db
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

---

## 6. Ejecución

En la terminal, desde la carpeta `products-backend`, ejecuta:

```bash
./mvnw spring-boot:run
```

La API estará disponible en:  
[http://localhost:8080/api/products](http://localhost:8080/api/products)

La documentación interactiva Swagger UI estará en:  
[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## 7. Endpoints principales

- `GET    /api/products` — Listar todos los productos
- `GET    /api/products/{id}` — Obtener un producto por ID
- `POST   /api/products` — Crear un nuevo producto
- `PUT    /api/products/{id}` — Actualizar un producto existente
- `DELETE /api/products/{id}` — Eliminar un producto

### Ejemplo de body para crear/actualizar:

```json
{
  "name": "Producto ejemplo",
  "description": "Descripción del producto",
  "price": 99.99,
  "quantity": 10
}
```

---

## 8. Pruebas

Se recomienda usar **Swagger UI** para probar los endpoints, o herramientas como **Postman** o **Thunder Client**.

---

## 9. Buenas prácticas y recomendaciones

- **POO:** Usa clases, interfaces y encapsulamiento para mantener el código limpio y mantenible.
- **Patrones:** Aplica Service y Repository para separar lógica de negocio y acceso a datos.
- **Arquitectura:** Mantén la estructura en capas para facilitar la escalabilidad y el testing.
- **Documentación:** Mantén los endpoints documentados y actualizados en Swagger.
- **Manejo de errores:** Se recomienda implementar un handler global de excepciones para respuestas consistentes (puedes descomentar y adaptar el ejemplo en `exception/GlobalExceptionHandler.java`).

---

¿Listo para usar o extender el backend? Puedes agregar validaciones, seguridad, o lógica adicional según tus necesidades.
