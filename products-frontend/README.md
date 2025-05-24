# Products Frontend

Frontend profesional para la gestión de productos usando Angular 19+ y Angular Material, siguiendo Clean Architecture, buenas prácticas y patrones modernos.

## Características principales

- **Arquitectura limpia y modular**: Separación clara de dominios, lógica y presentación.
- **Componentes standalone**: Sin AppModule, usando rutas y configuración moderna.
- **Angular Material**: UI profesional, responsiva y accesible.
- **Paleta personalizada**: Rojo, gris y negro, con transiciones suaves y estilos globales en SCSS.
- **Formularios reactivos**: Validación visual y feedback inmediato.
- **Diálogos reutilizables**: Confirmación de acciones críticas.
- **Consumo de API REST**: Integración con backend Spring Boot.
- **Manejo avanzado de errores**: UX robusta y mensajes claros.
- **Código documentado**: JSDoc y comentarios explicativos.

---

## Estructura del proyecto

```
src/
  app/
    app.component.{ts,html,scss}
    app.config.ts
    app.routes.ts
    products/
      product.model.ts
      product.service.ts
      product-list/
        product-list.component.{ts,html,scss}
      product-form/
        product-form.component.{ts,html,scss}
    shared/
      confirm-dialog/
        confirm-dialog.component.{ts,html,scss}
  styles.scss
  index.html
  main.ts
```

- **products/**: Lógica de dominio y presentación de productos.
- **shared/**: Componentes reutilizables (ej: confirm-dialog).
- **styles.scss**: Paleta y estilos globales (rojo: `#d32f2f`, gris: `#616161`, negro: `#000`).

---

## Instalación y ejecución

1. Instala dependencias:
   ```bash
   npm install
   ```

2. Corre el servidor de desarrollo:
   ```bash
   ng serve
   ```
   Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

---

## Principales patrones y buenas prácticas

- **Clean Architecture**: Separación de responsabilidades (servicios, modelos, UI).
- **POO y tipado fuerte**: Uso de interfaces y clases TypeScript.
- **Inyección de dependencias**: Servicios inyectados en componentes.
- **Observables y RxJS**: Manejo reactivo de datos y errores.
- **Componentes standalone**: Mejor rendimiento y mantenibilidad.
- **Angular Material**: Componentes accesibles y responsivos.
- **SCSS modular**: Variables, anidamiento y transiciones.
- **Validación reactiva**: Feedback visual inmediato en formularios.
- **UX profesional**: Spinners, diálogos, mensajes de error y confirmación.
- **Documentación**: JSDoc y comentarios en el código.

---

## Personalización de estilos

- Modifica la paleta y estilos globales en `src/styles.scss`.
- Los componentes usan SCSS propio para estilos específicos y transiciones.

---

## Dependencias principales

- `@angular/core`, `@angular/material`, `@angular/forms`, `rxjs`, `zone.js`
- Ver todas en `package.json`.

---

## Testing

- Pruebas unitarias listas para ejecutarse:
  ```bash
  ng test
  ```

---

## Generación de componentes

Usa Angular CLI para crear nuevos componentes standalone:
```bash
ng generate component nombre --standalone
```

---

## Recursos útiles

- [Angular CLI](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io/)

---

¿Dudas o sugerencias? ¡El código está documentado y listo para escalar!
