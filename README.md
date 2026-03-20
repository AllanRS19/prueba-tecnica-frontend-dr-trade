# Prueba Técnica utilizando API de Rick & Morty — README

## ¿Cómo ejecutar el proyecto?

### 1. Clonar el repositorio

```bash
git clone https://github.com/AllanRS19/prueba-tecnica-frontend-dr-trade.git
cd prueba-tecnica-frontend-dr-trade.git
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Para leer las variables de enterno, debe crear un archivo `.env.local` en la raíz del proyecto y añadir la siguiente variable de entorno:

```env
NEXT_PUBLIC_API_BASE_URL=https://rickandmortyapi.com/api
```

---

### 4. Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:3000
```

---


## Decisiones técnicas tomadas

### 1. Uso de Next.js (App Router + Server Components)

Decidí utilizar Next.js con App Router para desarrollar el proyecto, ya que brinda las siguientes ventajas:

* Renderizado en servidor (SSR)
* Manejo eficiente de datos asincrónicos

Al momento de desarrollar el proyecto, haber utilizado Next.js me permitió tener:

* Mejor rendimiento inicial
* Separación clara entre lógica de datos y la interfaz gráfica

---

### 2. Creación de una función reutilizable para el consumo de la API (`fetcher`)

Decidí crear una función `fetcher` genérica, ya que estaría haciendo llamadas a la API y dependiendo de los valores que necesitara, me permitiría expresar el valor de retorno deseado. Además, volver esta función reutilizable, me permitió evitar duplicación de lógica al no crear la misma función en varias partes de la aplicación.

---

### 3. Manejo de paginación completa

Implementé la paginación en la página de inicio para asegurar que la interfaz no se vea cargada, así como para optimizar la llamada a la API, ya que no se devolverían todos los resultados al mismo tiempo.

---

### 4. Uso de shadcn/ui + Recharts

Decidí utilizar la librería de components shadcn/ui, ya que permite agrerar componentes de manera sencilla y agrerar solo los componentes que necesites.

* `shadcn/ui` para consistencia visual
* `Recharts` como motor de gráficos

Ventajas:

* Me permitió tener componentes reutilizables
* Tiene integración con TailwindCSS

---

### 5. Arquitectura modular

Estructura adoptada:

```
/app
/components
/lib
/hooks
/constants
```

Separando:

* UI
* Componentes
* Lógica de aplicación
* Datos constantes
* Rutas

Decidí hacerlo de esta manera, ya que entiendo que puede facilitar la escalabilidad, testing y mantenimiento.

---

## ¿Qué cosas mejoraría con más tiempo?

### 1. Hacer que un favorito agregado desaparezca al momento de darle click a eliminar

Actualmente puedo eliminarlo correctamente, pero no refresca al instante la lista de favoritos.

Mejoraría:

* Mejor experiencia de usuario
* Mayor sensación de acción realizada

---

### 2. Mejoras en UX/UI

* Animaciones (GSAP)
* Layout tipo dashboard profesional

---

### 3. Testing

* Hacer pruebas unitarias para los componentes utilizados

---

### 4. Internacionalización (i18n)

Soporte multi-idioma para mejorar accesibilidad del proyecto, solo en inglés.

---

## Versión live

El proyecto está desplegado en Vercel y puede ser accedido utilizando el siguiente enlace: [Prueba Técnica API Rick & Morty](https://prueba-tecnica-frontend-dr-trade.vercel.app/)

---