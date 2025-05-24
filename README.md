
# Products Management Fullstack

**Products Management** es una solución fullstack profesional para la gestión de productos, desarrollada con **Spring Boot** (backend) y **Angular** (frontend). El proyecto sigue principios de Clean Architecture, buenas prácticas de desarrollo, y patrones modernos tanto en el backend como en el frontend.

---

**Demo**



https://github.com/user-attachments/assets/cc6a8ce9-e0c7-4b53-8e00-3cf8173da4df


---

## Descripción General

Este sistema permite la administración completa de productos, incluyendo alta, edición, listado y eliminación. El backend expone una API REST documentada con Swagger, mientras que el frontend ofrece una interfaz moderna, responsiva y amigable, construida con Angular Material y una paleta personalizada.

---

## Tecnologías principales

- **Backend:**  
  - Java 17+  
  - Spring Boot  
  - Spring Data JPA  
  - H2 Database (o tu base preferida)  
  - Swagger/OpenAPI (documentación interactiva)

- **Frontend:**  
  - Angular 19+ (standalone components)  
  - Angular Material  
  - RxJS  
  - SCSS (paleta personalizada: rojo, gris, negro)

---

## Estructura del Proyecto

```
salle-fs-project/
  products-backend/
    src/
      main/java/com/salle/crivera/products_backend/
        controller/
        exception/
        model/
        repository/
        service/
      resources/
    README.md
  products-frontend/
    src/
      app/
        products/
          product-list/
          product-form/
        shared/
          confirm-dialog/
      styles.scss
    README.md
```

---

## Principales características

- **API RESTful** para gestión de productos (CRUD)
- **Documentación Swagger** para probar y explorar la API
- **Frontend SPA** con Angular Material y validación reactiva
- **UX profesional**: diálogos de confirmación, feedback visual, manejo avanzado de errores
- **Arquitectura limpia**: separación de capas, inyección de dependencias, código documentado
- **Estilos modernos**: SCSS modular, transiciones y paleta personalizada

---

## Cómo ejecutar el proyecto

### 1. Backend (Spring Boot)

```bash
cd products-backend
./mvnw spring-boot:run
```
- Accede a la API en: `http://localhost:8080/api/products`
- Documentación Swagger: `http://localhost:8080/swagger-ui.html`

### 2. Frontend (Angular)

```bash
cd products-frontend
npm install
ng serve
```
- Accede a la app en: [http://localhost:4200](http://localhost:4200)

---

## Patrones y buenas prácticas implementadas

- **Clean Architecture** y separación de responsabilidades
- **POO** y tipado fuerte en backend y frontend
- **Inyección de dependencias** en ambos stacks
- **Observables y manejo reactivo** en Angular
- **Componentes standalone** y modulares
- **Validación y feedback visual** en formularios
- **Código documentado** y fácil de mantener

---

## Recursos útiles

- [Angular CLI](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Swagger/OpenAPI](https://swagger.io/tools/swagger-ui/)



---

¿Quieres que lo deje en un archivo `README.md` en la raíz del proyecto?
